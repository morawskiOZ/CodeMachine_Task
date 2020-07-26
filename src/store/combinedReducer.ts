import { combineReducers, Reducer } from 'redux'
import hobbies from './state/hobbies/reducer'
import users from './state/users/reducer'

export const combinedReducers: Reducer = combineReducers({
  hobbies,
  users,
})
