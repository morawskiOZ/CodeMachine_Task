import React, { ReactElement } from 'react'
import { UserForm } from '../UserList/UserForm'
import { HobbyForm } from '../HobbyList/HobbyForm'
import { UserList } from '../UserList'
import { HobbyList } from '../HobbyList'
import './index.scss'

export const HobbyWidget = (): ReactElement => {
  return (
    <div className="HobbyWidget">
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
