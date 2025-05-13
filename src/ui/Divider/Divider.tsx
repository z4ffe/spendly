import clsx from 'clsx'
import {ComponentProps, FC} from 'react'
import styles from './Divider.module.scss'

const Divider: FC<ComponentProps<'div'>> = ({className}) => <div className={clsx(styles.divider, className)} />

export default Divider