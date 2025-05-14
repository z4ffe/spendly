import {verifySession} from '@/actions/auth'
import {redirect} from 'next/navigation'

export default async function Page() {
	const isSession = await verifySession()

	if (isSession) redirect('/dashboard')
	else redirect('/login')
}
