export interface User {
  uuid: string
  name: string
}

export interface UserState {
  users: User[]
}

export enum UserActions {
  ADD_USER = 'add_user',
  DEFAULT = 'default',
}

interface AddUserAction {
  type: UserActions.ADD_USER
  payload: User
}

interface DefaultAction {
  type: UserActions.DEFAULT
}

export type UserActionTypes = AddUserAction | DefaultAction
