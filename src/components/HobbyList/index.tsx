import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectHobbiesByUser } from '../../store/state/hobbies/selectors'
import { HobbyRow } from './HobbyRow'
import { AppState } from '../../store/createStore'
import { selectActiveUserUuid } from '../../store/state/users/selectors'

export const HobbyList = (): ReactElement => {
  const activeUserUuid = useSelector(selectActiveUserUuid)

  const hobbiesByUser = useSelector(state =>
    selectHobbiesByUser(state as AppState, activeUserUuid),
  )

  if (!hobbiesByUser) return null

  return (
    <div>
      {hobbiesByUser.map(
        (hobby): ReactElement => {
          return <HobbyRow {...hobby} key={hobby.uuid} />
        },
      )}
    </div>
  )
}
