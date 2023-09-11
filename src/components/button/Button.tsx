import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styles from "./Button.module.scss"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children?: ReactNode,
  className?: string,
  size?: "small" | "medium" | "large"
}

const Button: FC<ButtonProps> = ({ children, className, size = "large", ...rest }) => {
  return (
    <button {...rest} className={`${styles.btn} ${className}`} data-size={size} >{children}</button>
  )
}

export default Button