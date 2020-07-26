import React, { ReactElement } from 'react'
import { Hobby } from 'src/store/state/hobbies/types'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHobby } from 'src/store/state/hobbies/actions'
import { selectActiveUserUuid } from 'src/store/state/users/selectors'

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
    <>
      <div>Passion: {level}</div>
      <div>{description}</div>
      <div>Since: {startingYear}</div>
      <button type="button" onClick={deleteClickHandler}>
        X
      </button>
    </>
  )
}
