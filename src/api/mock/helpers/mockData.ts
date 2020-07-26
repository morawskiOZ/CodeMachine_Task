import { Hobby, HobbyLevel } from 'src/store/state/hobbies/types'
import { User } from 'src/store/state/users/types'

export const mockUsers: User[] = [
  { name: 'Piotr', uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' },
  { name: 'Kamil', uuid: '9b1de111-3b7d-4bad-9bdd-2b0d7b3dcb6d' },
  { name: 'Mariusz', uuid: '9b1deb4d-3b7d-4bad-9bdd-110d7b3dcb6d' },
  { name: 'Harry', uuid: '9b1deb4d-3b7d-4bad-44dd-543d7b3dcb6d' },
]

export const mockHobbies: Record<string, Hobby[]> = {
  '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d': [
    {
      description: 'Eating',
      level: 'High' as HobbyLevel,
      startingYear: '1990',
      uuid: '9b1deb4d-3b7a-4bzd-44dd-2b0d7b3dcb6d',
    },
    {
      description: 'Driving',
      level: 'Medium' as HobbyLevel,
      startingYear: '2010',
      uuid: '9x1deb4d-3b7a-4bzd-14dd-2b0d7b3zxb6d',
    },
    {
      description: 'Going to Zoo',
      level: 'High' as HobbyLevel,
      startingYear: '2003',
      uuid: 'eb1deb4a-3bca-4bzx-44dd-zb0d7b3dcb6d',
    },
    {
      description: 'Eating',
      level: 'Very-High' as HobbyLevel,
      startingYear: '2001',
      uuid: '9bedeb4d-3b7a-4bzd-44dd-2b0d7bedcbed',
    },
  ],

  '9b1de111-3b7d-4bad-9bdd-2b0d7b3dcb6d': [
    {
      description: 'Eating',
      level: 'High' as HobbyLevel,
      startingYear: '1990',
      uuid: '9b1seb4d-3b7a-4bcd-44dd-2b0d7b3dcb6d',
    },
    {
      description: 'Watching movies',
      level: 'Medium' as HobbyLevel,
      startingYear: '2011',
      uuid: '9x1seb4d-3b7a-4bzd-14dd-2b0d7b3sdb6d',
    },
    {
      description: 'Going to Zoo',
      level: 'High' as HobbyLevel,
      startingYear: '2003',
      uuid: 'eb1deb4a-3bcs-4bzx-dsdd-zb0das3dcb6d',
    },
    {
      description: 'Reading books',
      level: 'Very-High' as HobbyLevel,
      startingYear: '2001',
      uuid: '9beseb4d-3b7a-4ad-421d-2b0ddbedcasd',
    },
  ],

  '9b1deb4d-3b7d-4bad-9bdd-110d7b3dcb6d': [
    {
      description: 'Eating',
      level: 'High' as HobbyLevel,
      startingYear: '1980',
      uuid: '9b1deb4d-3b7a-zbzd-44ad-2b0d7b3d2b6d',
    },
  ],
}
