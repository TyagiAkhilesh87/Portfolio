import { NextResponse } from 'next/server';
import { getChatGPTUser } from '@/app/chatgpt-auth';
import { getDb } from '@/db';
import { projectsTable } from '@/db/schema';

export async function GET() {
  if (!await getChatGPTUser()) return NextResponse.json({ error:'Unauthorized' },{ status:401 });
  return NextResponse.json(await getDb().select().from(projectsTable));
}

export async function POST(request:Request) {
  if (!await getChatGPTUser()) return NextResponse.json({ error:'Unauthorized' },{ status:401 });
  const input = await request.json() as Record<string,unknown>;
  const title = String(input.title ?? '').trim().slice(0,120);
  const slug = String(input.slug ?? '').trim().toLowerCase().replace(/[^a-z0-9-]/g,'').slice(0,100);
  const url = String(input.url ?? '').trim().slice(0,500);
  const category = String(input.category ?? '').trim().slice(0,120);
  const shortDescription = String(input.shortDescription ?? '').trim().slice(0,500);
  if (!title || !slug || !url.startsWith('https://') || !category || !shortDescription) return NextResponse.json({ error:'Invalid project data' },{ status:400 });
  const now = new Date();
  const value = { id:crypto.randomUUID(), title, slug, url, category, shortDescription, industries:[], technologies:[], services:[], tags:[], gallery:[], featured:false, sortOrder:Number(input.sortOrder)||0, status:'draft' as const, createdAt:now, updatedAt:now };
  await getDb().insert(projectsTable).values(value);
  return NextResponse.json(value,{ status:201 });
}
