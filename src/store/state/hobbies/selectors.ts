import { AppState } from '../../createStore'
import { Hobby } from './types'

export const selectHobbiesByUser = (
  state: AppState,
  userUuid: string,
): Hobby[] => {
  const hobbies = state.hobbies.hobbies[userUuid]

  return hobbies
}
