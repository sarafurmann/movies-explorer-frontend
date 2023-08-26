import clsx from 'clsx'
import styles from './Button.module.css'

export const Button = ({ className, children, type = 'button', disabled }) => {
  return (
    <button
      type={type}
      className={clsx(className, styles.button)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
