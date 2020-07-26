import * as React from 'react'
import { ReactElement, ReactNode } from 'react'
import './style.scss'

interface Props {
  children: ReactNode
  dataTestid?: string
  onClick?: (...args: any) => void
}

export const Button = ({ children, onClick, ...rest }: Props): ReactElement => {
  return (
    <button type="button" onClick={onClick} className="Button" {...rest}>
      {children}
    </button>
  )
}
