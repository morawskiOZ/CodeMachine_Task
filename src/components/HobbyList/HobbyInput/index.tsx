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
    startingYear: '',
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
    if (activeUserUuid && description && level && startingYear) {
      dispatch(
        addHobby(
          { description, level, startingYear, uuid: uuidv4() },
          activeUserUuid,
        ),
      )
    }
  }

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    formDispatch({ field: e.target.name as InputNames, value: e.target.value })
  }

  return (
    <form onSubmit={submitHandler} data-testid="form-user">
      <select
        name="level"
        className="HobbyInput__Select"
        aria-label="Select passion level"
        onChange={changeHandler}
        required
      >
        <option value="">Select passion level</option>
        <option value={HobbyLevel.LOW}>{HobbyLevel.LOW}</option>
        <option value={HobbyLevel.MEDIUM}>{HobbyLevel.MEDIUM}</option>
        <option value={HobbyLevel.HIGH}>{HobbyLevel.HIGH}</option>
        <option value={HobbyLevel.VERY_HIGH}>{HobbyLevel.VERY_HIGH}</option>
      </select>
      <input
        name="description"
        placeholder="Enter hobby description"
        aria-label="hobby description"
        value={description}
        onChange={changeHandler}
        required
      />
      <input
        name="startingYear"
        placeholder="Enter year"
        aria-label="starting year"
        value={startingYear}
        onChange={changeHandler}
        type="number"
        required
      />
      <button type="submit">Add</button>
    </form>
  )
}
