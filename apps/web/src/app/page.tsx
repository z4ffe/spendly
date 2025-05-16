import {redirect} from 'next/navigation'

export default async function Page() {
	const isSession = false

	if (isSession) redirect('/dashboard')
	else redirect('/login')
}
