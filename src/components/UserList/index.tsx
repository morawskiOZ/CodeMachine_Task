import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from 'src/store/state/users/selectors'
import { UserRow } from './UserRow/index'

export const UserList = (): ReactElement => {
  const allUsers = useSelector(selectAllUsers)

  return (
    <div>
      {allUsers.map(user => {
        return <UserRow {...user} key={user.uuid} />
      })}
    </div>
  )
}
