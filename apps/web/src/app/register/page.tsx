import Link from 'next/link'

const Pages = async () => {
	return (
		<div>
			<form>
				<h6>Registration</h6>
				<label>email<input type='text' name='email' /></label>
				<label>password<input type='password' name='password' /></label>
				<label>First name<input type='text' name='firstName' /></label>
				<label>Last name<input type='text' name='lastName' /></label>
				<button type='submit'>click</button>
			</form>
			<p>Already have an account? <Link href='/login'>Sign in here</Link></p>
		</div>
	)
}

export default Pages