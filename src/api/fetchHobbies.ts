import { Hobby } from 'src/store/state/hobbies/types'

export const fetchHobbies = async (): Promise<Hobby[]> => {
  const data = await (await fetch('/hobbies')).json()
  return data
}
