import { AppState } from '../../createStore'
import { User } from './types'

export const selectActiveUserUuid = (state: AppState): string =>
  state.users.activeUserUuid

export const selectAllUsers = (state: AppState): User[] => state.users.users
