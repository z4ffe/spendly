import {db} from '@/db'
import {sessionsTable} from '@/db/sessions.schema'
import {usersTable} from '@/db/users.schema'
import {eq} from 'drizzle-orm'
import {cookies} from 'next/headers'

export const getUserFromSession =  async () => {
	const cookieStore = await cookies()
	const sessionId = cookieStore.get('session')

	if (!sessionId) return null

	const user = await db.select({
		firstName: usersTable.firstName,
		lastName: usersTable.lastName,
		email: usersTable.email,
		role: usersTable.role,
		emailValidated: usersTable.emailValidated
	}).from(usersTable).rightJoin(sessionsTable, eq(usersTable.id, sessionsTable.userId))

	return user[0]
}