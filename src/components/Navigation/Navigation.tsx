'use client'

import NavigationIcons from '@/ui/Icons/NavigationIcons'
import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from './Navigation.module.scss'

const Navigation = () => {
	const LINKS_LIST = [
		{name: 'Overview', href: '/dashboard', icon: <NavigationIcons.overview />},
		{name: 'Balances', href: '/dashboard/balances', icon: <NavigationIcons.balances />},
		{name: 'Transactions', href: '/dashboard/transactions', icon: <NavigationIcons.transactions />},
		{name: 'Expenses', href: '/dashboard/expenses', icon: <NavigationIcons.expenses />},
		{name: 'Goals', href: '/dashboard/goals', icon: < NavigationIcons.goals />},
		{name: 'Settings', href: '/dashboard/settings', icon: <NavigationIcons.settings />}
	]

	const pathname = usePathname()

	return (
		<div className={styles.navigation}>
			{LINKS_LIST.map(link => {
				return (
					<Link key={link.name}
							className={clsx(styles.navigation__link, pathname === link.href && styles['navigation__link-active'])}
							href={link.href}>
						{link.icon}
						<span>{link.name}</span>
					</Link>
				)
			})}
		</div>
	)
}

export default Navigation