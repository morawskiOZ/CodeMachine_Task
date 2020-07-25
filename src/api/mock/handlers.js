/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw'
import { mockUsers, mockHobbies } from './helpers/mockData'

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Content-Type', 'application/json'),
      ctx.body(JSON.stringify(mockUsers)),
    )
  }),
  rest.get('/hobbies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Content-Type', 'application/json'),
      ctx.body(JSON.stringify(mockHobbies)),
    )
  }),
]
