import React, { ChangeEvent, FormEvent, ReactElement, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Hobby, HobbyLevel } from 'src/store/state/hobbies/types'
import { selectActiveUserUuid } from 'src/store/state/users/selectors'
import { v4 as uuidv4 } from 'uuid'
import { addHobby } from '../../../store/state/hobbies/actions'
import './index.scss'

type InputNames = keyof Hobby

export const HobbyInput = (): ReactElement => {
  const dispatch = useDispatch()

  const activeUserUuid = useSelector(selectActiveUserUuid)

  const initialState: Hobby = {
    description: '',
    level: null,
    startingYear: null,
    uuid: '',
  } as const

  const reducer = (
    state: Hobby,
    {
      field,
      value,
    }: { field: InputNames; value: typeof initialState[InputNames] },
  ) => ({
    ...state,
    [field]: value,
  })

  const [{ description, level, startingYear }, formDispatch] = useReducer(
    reducer,
    initialState,
  )

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (activeUserUuid) {
      dispatch(
        addHobby(
          { description, level, startingYear, uuid: uuidv4() },
          activeUserUuid,
        ),
      )
    }
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    formDispatch({ field: e.target.name as InputNames, value: e.target.value })
  }

  return (
    <form onSubmit={submitHandler} data-testid="form-user">
      <select
        name="level"
        className="HobbyInput__Select"
        value={level}
        aria-label="Select passion level"
      >
        <option value="">Select passion level</option>
        <option>{HobbyLevel.LOW}</option>
        <option>{HobbyLevel.MEDIUM}</option>
        <option>{HobbyLevel.HIGH}</option>
        <option>{HobbyLevel.VERY_HIGH}</option>
      </select>
      <input
        name="description"
        placeholder="Enter hobby description"
        aria-label="hobby description"
        value={description}
        onChange={changeHandler}
      />
      <input
        name="startingYear"
        placeholder="Enter year"
        aria-label="starting year"
        value={startingYear}
        onChange={changeHandler}
      />
      <button type="submit">Add</button>
    </form>
  )
}
