import actions from '@/actions'
import Button from '@/ui/Button/Button'
import Input from '@/ui/Input/Input'
import Logo from '@/ui/Logo/Logo'
import {cookies} from 'next/headers'
import Link from 'next/link'
import {redirect} from 'next/navigation'
import styles from './Login.module.scss'

export default async function Page() {
	const cookieStore = await cookies()
	const session = cookieStore.get('session')

	if (session?.value) {
		redirect('/dashboard')
	}

	return (
		<div className={styles.login}>
			<Logo className={styles.logo} />
			<form className={styles.loginForm} action={actions.login}>
				<div className={styles.inputGroup}>
					<label>Email Address</label>
					<Input type='text' name='email' />
				</div>
				<div className={styles.inputGroup}>
					<label>Password</label>
					<Input type='password' name='password' />
				</div>
				<Button text='Login' type='submit' />
			</form>
			<Link className={styles.createAccountBtn} href='/register'>Create an account</Link>
		</div>
	)
}
