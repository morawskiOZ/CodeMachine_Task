import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'src/components/Button'
import { deleteHobby } from 'src/store/state/hobbies/actions'
import { Hobby } from 'src/store/state/hobbies/types'
import { selectActiveUserUuid } from 'src/store/state/users/selectors'
import './style.scss'

export const HobbyRow = ({
  description,
  level,
  startingYear,
  uuid,
}: Hobby): ReactElement => {
  const dispatch = useDispatch()
  const activeUserUuid = useSelector(selectActiveUserUuid)

  const deleteClickHandler = () => {
    dispatch(deleteHobby(uuid, activeUserUuid))
  }

  return (
    <div className="HobbyRow">
      <div>Passion: {level}</div>
      <div>{description}</div>
      <div>Since: {startingYear}</div>
      <Button onClick={deleteClickHandler}>&#10005;</Button>
    </div>
  )
}
