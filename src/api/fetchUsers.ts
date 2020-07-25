import { User } from 'src/store/state/users/types'

export const fetchUsers = async (): Promise<User[]> => {
  const data = await (await fetch('/users')).json()
  return data
}
