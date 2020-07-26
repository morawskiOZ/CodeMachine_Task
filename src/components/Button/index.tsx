import React, { ReactNode, ReactElement } from 'react'
import './style.scss'

interface Props {
  children: ReactNode
  dataTestid?: string
  onClick?: (any) => void
}

export const Button = ({ children, onClick, ...rest }: Props): ReactElement => {
  return (
    <button type="button" onClick={onClick} className="Button" {...rest}>
      {children}
    </button>
  )
}
