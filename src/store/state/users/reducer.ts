import { UserState, UserActionTypes, UserActions } from './types'

const initialState: UserState = {
  users: [],
  activeUserUuid: '',
}

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UserActions.ADD_USER:
      return { ...state, users: [...state.users, action.payload] }
    case UserActions.FETCH_USERS_SUCCESS:
      return { ...state, users: [...state.users, ...action.payload] }
    case UserActions.TOGGLE_ACTIVE_USER:
      return {
        ...state,
        activeUserUuid:
          action.payload === state.activeUserUuid ? '' : action.payload,
      }
    default:
      return state
  }
}
