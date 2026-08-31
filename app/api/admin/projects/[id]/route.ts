import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getChatGPTUser } from '@/app/chatgpt-auth';
import { getDb } from '@/db';
import { projectsTable } from '@/db/schema';

export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}) {
  if (!await getChatGPTUser()) return NextResponse.json({ error:'Unauthorized' },{ status:401 });
  const { id } = await params;
  const input = await request.json() as Record<string,unknown>;
  const allowed = {
    ...(typeof input.title==='string'&&{title:input.title.trim().slice(0,120)}),
    ...(typeof input.shortDescription==='string'&&{shortDescription:input.shortDescription.trim().slice(0,500)}),
    ...(typeof input.featured==='boolean'&&{featured:input.featured}),
    ...(input.status==='draft'||input.status==='published'?{status:input.status}:{}),
    ...(Number.isInteger(input.sortOrder)&&{sortOrder:Number(input.sortOrder)}),
    updatedAt:new Date(),
  };
  await getDb().update(projectsTable).set(allowed).where(eq(projectsTable.id,id));
  return NextResponse.json({ ok:true });
}

export async function DELETE(_:Request,{params}:{params:Promise<{id:string}>}) {
  if (!await getChatGPTUser()) return NextResponse.json({ error:'Unauthorized' },{ status:401 });
  const { id } = await params;
  await getDb().delete(projectsTable).where(eq(projectsTable.id,id));
  return NextResponse.json({ ok:true });
}
