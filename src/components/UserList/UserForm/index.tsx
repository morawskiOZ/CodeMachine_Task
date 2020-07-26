import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'src/components/Button'
import { v4 as uuidv4 } from 'uuid'
import { addUser } from '../../../store/state/users/actions'
import './style.scss'

export const UserForm = (): ReactElement => {
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
    <form data-testid="form-user" onSubmit={submitHandler} className="UserForm">
      <input
        name="name"
        data-testid="form-user-input"
        placeholder="Enter user name"
        value={name}
        onChange={changeHandler}
        aria-label="Enter name"
        className="UserForm__Input"
      />
      <Button onClick={submitHandler} data-testid="button-add-user">
        Add
      </Button>
    </form>
  )
}
