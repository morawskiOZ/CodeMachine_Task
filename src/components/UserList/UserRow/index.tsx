import classnames from 'classnames'
import * as React from 'react'
import { KeyboardEvent, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleActiveUser } from 'src/store/state/users/actions'
import { User } from 'src/store/state/users/types'
import { selectActiveUserUuid } from '../../../store/state/users/selectors'
import './style.scss'

export const UserRow = ({ name, uuid }: User): ReactElement => {
  const dispatch = useDispatch()
  const activeUserUuid = useSelector(selectActiveUserUuid)

  const isActive = activeUserUuid === uuid

  const clickHandler = () => {
    dispatch(toggleActiveUser(uuid))
  }
  const keyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      clickHandler()
    }
  }

  return (
    <div
      onClick={clickHandler}
      role="button"
      onKeyPress={keyPressHandler}
      tabIndex={0}
      className={classnames('UserRow', { 'UserRow--selected': isActive })}
    >
      {name}
    </div>
  )
}
