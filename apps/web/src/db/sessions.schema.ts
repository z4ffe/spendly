import {usersTable} from '@/db/users.schema'
import {relations} from 'drizzle-orm'
import {boolean, integer, pgTable, varchar} from 'drizzle-orm/pg-core'

export const sessionsTable = pgTable('sessions', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	sessionId: varchar('session_id', {length: 40}).notNull(),
	userId: integer('user_id').notNull().references(() => usersTable.id),
	valid: boolean().notNull().default(true)
})

export const sessionsRelations = relations(sessionsTable, ({one}) => ({
	userId: one(usersTable, {
		fields: [sessionsTable.userId],
		references: [usersTable.id]
	})
}))