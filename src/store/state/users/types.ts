export interface User {
  uuid: string
  name: string
}

export interface UserState {
  users: User[]
  activeUserUuid: string
}

export enum UserActions {
  ADD_USER = 'ADD_USER',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAIL = 'FETCH_USERS_FAIL',
  TOGGLE_ACTIVE_USER = 'TOGGLE_ACTIVE_USER',
  DEFAULT = 'DEFAULT',
}

interface AddUserAction {
  type: UserActions.ADD_USER
  payload: User
}

interface FetchUserSuccessAction {
  type: UserActions.FETCH_USERS_SUCCESS
  payload: User[]
}

interface ToggleActiveUserAction {
  type: UserActions.TOGGLE_ACTIVE_USER
  payload: string
}

interface DefaultAction {
  type: UserActions.DEFAULT
}

export type UserActionTypes =
  | AddUserAction
  | DefaultAction
  | FetchUserSuccessAction
  | ToggleActiveUserAction
