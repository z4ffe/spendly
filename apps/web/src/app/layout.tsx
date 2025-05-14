import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import '../styles/global.scss'
import {ReactNode} from 'react'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Spendly',
	description: 'Spendly - Finance App'
}

export default async function RootLayout({children}: Readonly<{children: ReactNode}>) {
	return (
		<html lang='en'>
		<body className={`${geistSans.variable} ${geistMono.variable}`}>
		{children}
		</body>
		</html>
	)
}
