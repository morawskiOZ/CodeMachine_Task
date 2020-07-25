import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import fetchInitialDataSaga from './sagas/fetchInitialData'
import hobbies from './state/hobbies/reducer'
import { HobbyState } from './state/hobbies/types'
import users from './state/users/reducer'
import { UserState } from './state/users/types'

const sagaMiddleware = createSagaMiddleware()

const combinedReducers = () =>
  combineReducers({
    hobbies,
    users,
  })

const createStore = () => {
  const store = reduxCreateStore(
    combinedReducers(),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(fetchInitialDataSaga)
  return store
}

export default createStore

// infering the type doesn't work, probably because of the middleware?
// export type RootState = ReturnType<typeof combinedReducers>

export interface AppState {
  hobbies: HobbyState
  users: UserState
}
