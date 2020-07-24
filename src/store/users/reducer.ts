import { UserState, UserActionTypes, UserActions } from './types'

const initialState: UserState = {
  users: [],
}

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UserActions.ADD_USER:
      return { ...state, users: [...state.users, action.payload] }
    default:
      return state
  }
}
