import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('subscribed_users', {
  id: integer('id').primaryKey(),
  created_at: integer('created_at', { mode: 'timestamp' }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  email: text('email').notNull().unique(),
  name: text('name'),
  is_email_verified: integer('is_email_verified', { mode: 'boolean' })
    .notNull()
    .default(false)
});
