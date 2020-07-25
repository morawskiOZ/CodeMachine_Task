export interface User {
  uuid: string
  name: string
}

export interface UserState {
  users: User[]
}

export enum UserActions {
  ADD_USER = 'ADD_USER',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAIL = 'FETCH_USERS_FAIL',
  USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED',
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

interface DefaultAction {
  type: UserActions.DEFAULT
}

export type UserActionTypes =
  | AddUserAction
  | DefaultAction
  | FetchUserSuccessAction
