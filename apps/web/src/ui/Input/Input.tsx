import {ComponentProps, FC} from 'react'
import styles from './Input.module.scss'

interface Props extends ComponentProps<'input'> {

}

const Input: FC<Props> = (props) => {
	return (
		<input {...props} className={styles.input} />
	)
}

export default Input