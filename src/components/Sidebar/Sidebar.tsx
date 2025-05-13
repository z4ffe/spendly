import Navigation from '@/components/Navigation/Navigation'
import Divider from '@/ui/Divider/Divider'
import Logo from '@/ui/Logo/Logo'
import LogoutButton from '@/ui/LogoutButton/LogoutButton'
import UserCard from '@/ui/UserCard/UserCard'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<Navigation />
			<LogoutButton />
			<Divider className={styles.divider} />
			<UserCard />
		</div>
	)
}

export default Sidebar