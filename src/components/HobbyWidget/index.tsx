import React, { ReactElement } from 'react'
import { UserInput } from '../UserList/UserInput'
import { HobbyInput } from '../HobbyList/HobbyInput'
import { UserList } from '../UserList'
import { HobbyList } from '../HobbyList'

export const HobbyWidget = (): ReactElement => {
  return (
    <div>
      <UserInput />
      <HobbyInput />
      <UserList />
      <HobbyList />
    </div>
  )
}
