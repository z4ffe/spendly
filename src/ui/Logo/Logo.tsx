import Link from 'next/link'
import {ComponentProps, FC} from 'react'
import styles from './Logo.module.scss'

interface Props extends ComponentProps<'a'> {
}

const Logo: FC<Props> = (props) => {
	return <Link href='/' {...props}><h1 className={styles.logo}>Spendly</h1></Link>
}

export default Logo