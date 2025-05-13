import {sessionsTable} from '@/db/sessions.schema'
import {relations, sql} from 'drizzle-orm'
import {boolean, integer, pgTable, timestamp, varchar} from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	email: varchar({length: 255}).notNull(),
	firstName: varchar('first_name', {length: 255}).notNull(),
	lastName: varchar('last_name', {length: 255}).notNull(),
	password: varchar({length: 255}).notNull(),
	role: varchar({length: 40}).notNull().default('user'),
	emailValidated: boolean('email_validated').notNull().default(false),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => sql`CURRENT_TIMESTAMP`),
})

export const usersRelations = relations(usersTable, ({many}) => ({
	sessions: many(sessionsTable)
}))

