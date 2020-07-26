import {
  Hobby,
  HobbiesAction,
  HobbyActionTypes,
  HobbyState,
} from 'src/store/state/hobbies/types'

const initialState: HobbyState = { hobbies: {} }

export default (state = initialState, action: HobbyActionTypes): HobbyState => {
  switch (action.type) {
    case HobbiesAction.ADD_HOBBY: {
      const previousUserHobbies = state.hobbies[action.payload.userUuid] || []
      return {
        ...state,
        hobbies: {
          ...state.hobbies,
          [action.payload.userUuid]: [
            ...previousUserHobbies,
            action.payload.hobby,
          ],
        },
      }
    }
    case HobbiesAction.DELETE_HOBBY:
      return {
        ...state,
        hobbies: {
          ...state.hobbies,
          [action.payload.userUuid]: state.hobbies[
            action.payload.userUuid
          ].filter((hobby: Hobby) => hobby.uuid !== action.payload.hobbyUuid),
        },
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
