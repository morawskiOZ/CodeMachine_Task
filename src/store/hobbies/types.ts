enum HobbyLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  VERY_HIGH = 'Very-High',
}

export interface Hobby {
  uuid: string
  level: HobbyLevel
  description: string
  startingYear: number
}

// hobbies - array of records where key is corresponding user uuid
export interface HobbyState {
  hobbies: Record<string, Hobby[]>[]
}

export enum HobbiesAction {
  ADD_HOBBY = 'add_hobby',
  DELETE_HOBBY = 'delete_hobby',
  DEFAULT = 'default',
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

interface DefaultAction {
  type: HobbiesAction.DEFAULT
}

export type HobbyActionTypes =
  | AddHobbyAction
  | DeleteHobbyAction
  | DefaultAction
