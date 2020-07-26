import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/createStore'
import { selectHobbiesByUser } from '../../store/state/hobbies/selectors'
import { selectActiveUserUuid } from '../../store/state/users/selectors'
import { HobbyRow } from './HobbyRow'
import './style.scss'

export const HobbyList = (): ReactElement => {
  const activeUserUuid = useSelector(selectActiveUserUuid)

  const hobbiesByUser = useSelector(state =>
    selectHobbiesByUser(state as AppState, activeUserUuid),
  )

  if (!hobbiesByUser) return null

  return (
    <div className="HobbyList">
      {hobbiesByUser.map(
        (hobby): ReactElement => {
          return <HobbyRow {...hobby} key={hobby.uuid} />
        },
      )}
    </div>
  )
}
