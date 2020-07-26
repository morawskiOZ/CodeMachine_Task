import React, { ReactElement } from 'react'
import { HobbyList } from '../HobbyList'
import { HobbyForm } from '../HobbyList/HobbyForm'
import { UserList } from '../UserList'
import { UserForm } from '../UserList/UserForm'
import './style.scss'

export const HobbyWidget = (): ReactElement => {
  return (
    <div className="HobbyWidget" data-testid="hobby-widget">
      <div className="HobbyWidget--column">
        <UserForm />
        <UserList />
      </div>
      <div className="HobbyWidget--column">
        <HobbyForm />
        <HobbyList />
      </div>
    </div>
  )
}
