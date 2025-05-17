'use client'

import styles from '@/app/login/Login.module.scss'
import Button from '@/ui/Button/Button'
import Input from '@/ui/Input/Input'
import {FormEvent} from 'react'

const LoginForm = () => {
	const login = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const body = JSON.stringify(Object.fromEntries(formData.entries()))

		const response = await fetch(`http://localhost:8000/api/auth/signin`, {
			method: 'POST',
			credentials: 'include',
			headers: {'Content-Type': 'application/json'},
			body
		})

		if (!response.ok) {
			console.log('error')
			return
		}

		window.location.href = '/dashboard'
	}

	return (
		<form className={styles.loginForm} onSubmit={login}>
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
	)
}

export default LoginForm