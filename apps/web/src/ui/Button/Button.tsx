import {ComponentProps, FC} from 'react'
import styles from './Button.module.scss'

interface Props extends ComponentProps<'button'> {
	text: string
}

const Button: FC<Props> = ({text, ...props}) => {
	return (
		<button className={styles.button} {...props}>{text}</button>
	)
}

export default Button