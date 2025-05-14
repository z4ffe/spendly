import {verifySession} from '@/actions/auth'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import {permanentRedirect, RedirectType} from 'next/navigation'
import {ReactNode} from 'react'
import styles from './Layout.module.scss'

const DashboardLayout = async ({children}: Readonly<{children: ReactNode}>) => {
	const isSession = await verifySession()

	if (!isSession) permanentRedirect('/login', RedirectType.replace)

	return (
		<div className={styles.dashboardLayout}>
			<Sidebar />
			<Header/>
			{children}
		</div>
	)
}

export default DashboardLayout