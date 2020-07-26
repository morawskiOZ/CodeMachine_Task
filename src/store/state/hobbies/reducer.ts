import {
  Hobby,
  HobbiesAction,
  HobbyActionTypes,
  HobbyState,
} from 'src/store/state/hobbies/types'

const initialState: HobbyState = {}

export default (state = initialState, action: HobbyActionTypes): HobbyState => {
  switch (action.type) {
    case HobbiesAction.ADD_HOBBY:
      return {
        ...state,
        hobbies: {
          ...state.hobbies,
          [action.payload.userUuid]: [
            ...state.hobbies[action.payload.userUuid],
            action.payload.hobby,
          ],
        },
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
