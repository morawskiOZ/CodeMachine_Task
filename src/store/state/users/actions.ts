import { User, UserActionTypes, UserActions } from './types'

export const addUser = (user: User): UserActionTypes => {
  return {
    type: UserActions.ADD_USER,
    payload: user,
  }
}

export const toggleActiveUser = (activeUserUuid: string): UserActionTypes => {
  return {
    type: UserActions.TOGGLE_ACTIVE_USER,
    payload: activeUserUuid,
  }
}
