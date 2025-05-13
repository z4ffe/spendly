import {logout} from '@/actions/auth'
import {getUserFromSession} from '@/app/dashboard/getUserFromSession'
import styles from './UserCard.module.scss'

const UserCard = async () => {
	const user = await getUserFromSession()

	return (
		<div className={styles.userCard}>
			{/* <Image src='' alt='' /> */}
			<div>
				<div>{user?.firstName} {user?.lastName}</div>
				<button>View Profile</button>
			</div>
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default UserCard