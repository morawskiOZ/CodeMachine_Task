import React, { ReactNode, ReactElement } from 'react'
import './style.scss'

interface Props {
  children: ReactNode
  onClick?: (any) => void
}

export const Button = ({ children, onClick }: Props): ReactElement => {
  return (
    <button type="button" onClick={onClick} className="Button">
      {children}
    </button>
  )
}
