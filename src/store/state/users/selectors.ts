import { AppState } from '../../createStore'

export const selectActiveUserUuid = (state: AppState): string =>
  state.users.activeUserUuid
