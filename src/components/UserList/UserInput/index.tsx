import React, { ReactElement, useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addUser } from '../../../store/state/users/actions'

import './index.scss'

export const UserInput = (): ReactElement => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (name) {
      dispatch(addUser({ name, uuid: uuidv4() }))
      setName('')
    }
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  return (
    <form onSubmit={submitHandler} data-testid="form-user">
      <input
        name="name"
        placeholder="Enter user name"
        value={name}
        onChange={changeHandler}
        aria-label="Enter name"
      />
      <button type="submit">Add</button>
    </form>
  )
}
