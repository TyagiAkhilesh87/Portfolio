import { NextResponse } from 'next/server';
import { getDb } from '@/db';
import { inquiriesTable } from '@/db/schema';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const input = await request.json() as Record<string, unknown>;
    const name = String(input.name ?? '').trim().slice(0,100);
    const email = String(input.email ?? '').trim().toLowerCase().slice(0,160);
    const projectType = String(input.projectType ?? '').trim().slice(0,80);
    const budget = String(input.budget ?? '').trim().slice(0,80);
    const message = String(input.message ?? '').trim().slice(0,4000);
    if (name.length < 2 || !emailPattern.test(email) || !projectType || !budget || message.length < 20) {
      return NextResponse.json({ error:'Please complete every field.' },{ status:400 });
    }
    await getDb().insert(inquiriesTable).values({ id:crypto.randomUUID(), name, email, projectType, budget, message, createdAt:new Date() });
    return NextResponse.json({ ok:true });
  } catch {
    return NextResponse.json({ error:'Unable to save inquiry.' },{ status:500 });
  }
}
