'use server'

import {db} from '@/db'
import {sessionsTable} from '@/db/sessions.schema'
import {usersTable} from '@/db/users.schema'
import bcrypt from 'bcrypt'
import {eq} from 'drizzle-orm'
import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'

export const verifySession =  async () => {
	const cookieStore = await cookies()
	const sessionFromCookie = cookieStore.get('session')

	if (!cookieStore.has('session')) return false

	const session = await db.select().from(sessionsTable).where(eq(sessionsTable.sessionId, sessionFromCookie!.value))

	return session;
}

export const register = async (data: FormData) => {
	const email = data.get('email') as string
	const password = data.get('password') as string
	const firstName = data.get('firstName') as string
	const lastName = data.get('lastName') as string

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	await db.insert(usersTable).values({firstName, lastName, password: hashedPassword, email})
}

export const login = async (data: FormData) => {
	const email = data.get('email') as string
	const password = data.get('password') as string

	const user = await db.select().from(usersTable).where(eq(usersTable.email, email))

	if (!user.length) {
		console.error('No user found')
		return
	}

	const passwordIsValid = await bcrypt.compare(password, user[0].password)

	if (!passwordIsValid) {
		console.error('Password wrong')
		return
	}

	const sessionId = await db.insert(sessionsTable).values({
		userId: user[0].id,
		sessionId: await bcrypt.genSalt(10)
	}).returning({sessionsId: sessionsTable.sessionId})
	const cookieStore = await cookies()
	cookieStore.set({name: 'session', value: sessionId[0]?.sessionsId, httpOnly: true, path: '/'})
	redirect('/dashboard')
}

export const logout = async () => {
	const cookieStore = await cookies()
	const userSessionId = cookieStore.get('session')

	if (!userSessionId) return console.error('No session found')

	cookieStore.delete('session')
	await db.delete(sessionsTable).where(eq(sessionsTable.sessionId, userSessionId?.value))
	redirect('/login')
}