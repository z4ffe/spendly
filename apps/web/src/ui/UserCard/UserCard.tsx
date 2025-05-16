import styles from './UserCard.module.scss'

const UserCard = async () => {

	const user = {firstName: 'asd', lastName: 'asd'}

	return (
		<div className={styles.userCard}>
			{/* <Image src='' alt='' /> */}
			<div>
				<div>{user?.firstName} {user?.lastName}</div>
				<button>View Profile</button>
			</div>
			<button>Logout</button>
		</div>
	)
}

export default UserCard