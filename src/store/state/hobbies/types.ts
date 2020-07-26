export enum HobbyLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  VERY_HIGH = 'Very-High',
}

export interface Hobby {
  uuid: string
  level: HobbyLevel
  description: string
  startingYear: string
}

// hobbies - records where key is corresponding user uuid
export interface HobbyState {
  hobbies: Record<string, Hobby[]>
}

export enum HobbiesAction {
  ADD_HOBBY = 'ADD_HOBBY',
  DELETE_HOBBY = 'DELETE_HOBBY',
  FETCH_HOBBIES_SUCCESS = 'FETCH_HOBBIES_SUCCESS',
  FETCH_HOBBIES_FAIL = 'FETCH_HOBBIES_FAIL',
  HOBBIES_FETCH_REQUESTED = 'HOBBIES_FETCH_REQUESTED',
  DEFAULT = 'DEFAULT',
}

interface AddHobbyAction {
  type: HobbiesAction.ADD_HOBBY
  payload: {
    userUuid: string
    hobby: Hobby
  }
}

interface DeleteHobbyAction {
  type: HobbiesAction.DELETE_HOBBY
  payload: {
    userUuid: string
    hobbyUuid: string
  }
}

interface FetchHobbiesSuccessAction {
  type: HobbiesAction.FETCH_HOBBIES_SUCCESS
  payload: Record<string, Hobby[]>
}

interface DefaultAction {
  type: HobbiesAction.DEFAULT
}

export type HobbyActionTypes =
  | AddHobbyAction
  | DeleteHobbyAction
  | DefaultAction
  | FetchHobbiesSuccessAction
