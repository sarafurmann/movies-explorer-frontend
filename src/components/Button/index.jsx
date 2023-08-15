import clsx from 'clsx'
import styles from './Button.module.css'

export const Button = ({ className, children, type = 'button' }) => {
  return (
    <button type={type} className={clsx(className, styles.button)}>
      {children}
    </button>
  )
}
