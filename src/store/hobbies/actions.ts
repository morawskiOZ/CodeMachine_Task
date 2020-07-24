import { HobbyActionTypes, HobbiesAction, Hobby } from './types'

export function addHobby(newHobby: Hobby, userUuid: string): HobbyActionTypes {
  return {
    type: HobbiesAction.ADD_HOBBY,
    payload: {
      hobby: newHobby,
      userUuid,
    },
  }
}

export function deleteHobby(
  hobbyUuid: string,
  userUuid: string,
): HobbyActionTypes {
  return {
    type: HobbiesAction.DELETE_HOBBY,
    payload: {
      userUuid,
      hobbyUuid,
    },
  }
}
