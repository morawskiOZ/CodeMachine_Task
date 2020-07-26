import { AppState } from '../../createStore'
import { Hobby } from './types'

export const selectHobbiesByUser = (
  state: AppState,
  userUuid: string,
): Hobby[] => {
  const record = state.hobbies.hobbies.find(
    hobby => Object.keys(hobby)[0] === userUuid,
  )

  if (!record) return null

  return Object.values(record)[0]
}
