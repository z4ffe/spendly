import LoginForm from '@/components/LoginForm/LoginForm'
import Logo from '@/ui/Logo/Logo'
import Link from 'next/link'
import styles from './Login.module.scss'

export default async function Page() {
	return (
		<div className={styles.login}>
			<Logo className={styles.logo} />
			<LoginForm />
			<Link className={styles.createAccountBtn} href='/register'>Create an account</Link>
		</div>
	)
}
