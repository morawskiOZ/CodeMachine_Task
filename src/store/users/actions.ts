import { User, UserActionTypes, UserActions } from './types'

export function addHobby(user: User): UserActionTypes {
  return {
    type: UserActions.ADD_USER,
    payload: user,
  }
}
