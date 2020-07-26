import { HobbiesAction, HobbyActionTypes, HobbyState } from './types'

const initialState: HobbyState = {
  hobbies: [],
}

export default (state = initialState, action: HobbyActionTypes): HobbyState => {
  switch (action.type) {
    case HobbiesAction.ADD_HOBBY:
      return {
        ...state,
        hobbies: state.hobbies.map(userHobby => {
          const userId = Object.keys(userHobby)[0]
          if (userId === action.payload.userUuid) {
            return { [userId]: [...userHobby[userId], action.payload.hobby] }
          }
          return userHobby
        }),
      }
    case HobbiesAction.DELETE_HOBBY:
      return {
        ...state,
        hobbies: state.hobbies.map(userHobby => {
          const userId = Object.keys(userHobby)[0]
          if (userId === action.payload.userUuid) {
            return {
              [userId]: userHobby[userId].filter(
                hobby => hobby.uuid !== action.payload.hobbyUuid,
              ),
            }
          }
          return userHobby
        }),
      }
    case HobbiesAction.FETCH_HOBBIES_SUCCESS:
      return {
        ...state,
        hobbies: { ...state.hobbies, ...action.payload },
      }
    default:
      return state
  }
}
