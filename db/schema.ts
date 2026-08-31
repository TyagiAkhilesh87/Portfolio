import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const projectsTable = sqliteTable('projects', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  category: text('category').notNull(),
  shortDescription: text('short_description').notNull(),
  longDescription: text('long_description'),
  industries: text('industries', { mode: 'json' }).$type<string[]>().notNull().default([]),
  technologies: text('technologies', { mode: 'json' }).$type<string[]>().notNull().default([]),
  services: text('services', { mode: 'json' }).$type<string[]>().notNull().default([]),
  tags: text('tags', { mode: 'json' }).$type<string[]>().notNull().default([]),
  gallery: text('gallery', { mode: 'json' }).$type<string[]>().notNull().default([]),
  challenge: text('challenge'),
  approach: text('approach'),
  implementation: text('implementation'),
  results: text('results'),
  learnings: text('learnings'),
  featured: integer('featured', { mode: 'boolean' }).notNull().default(false),
  sortOrder: integer('sort_order').notNull().default(0),
  status: text('status', { enum: ['draft','published'] }).notNull().default('draft'),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
});

export const inquiriesTable = sqliteTable('inquiries', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  projectType: text('project_type').notNull(),
  budget: text('budget').notNull(),
  message: text('message').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
});
