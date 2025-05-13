import {getUserFromSession} from '@/app/dashboard/getUserFromSession'
import styles from './Header.module.scss'

const Header = async () => {
	const user = await getUserFromSession()

	return (
		<div className={styles.header}>
			<div>Hello {user?.firstName} {">>"} {new Date().toLocaleDateString()}</div>
			<button>Notifications</button>
			<input type='text' placeholder='Search here'/>
		</div>
	)
}

export default Header