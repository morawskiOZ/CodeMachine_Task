import { createStore as reduxCreateStore, combineReducers } from 'redux'
import hobbies from './hobbies/reducer'
import users from './users/reducer'

const combinedReducers = () =>
  combineReducers({
    hobbies,
    users,
  })

const createStore = (): string => reduxCreateStore(combinedReducers)
export default createStore
