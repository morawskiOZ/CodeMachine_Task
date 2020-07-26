import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from 'src/store/state/users/selectors'
import './style.scss'
import { UserRow } from './UserRow/index'

export const UserList = (): ReactElement => {
  const allUsers = useSelector(selectAllUsers)

  return (
    <div className="UserList">
      {allUsers.map(user => {
        return <UserRow {...user} key={user.uuid} />
      })}
    </div>
  )
}
