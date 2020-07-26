import { applyMiddleware, createStore as reduxCreateStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { combinedReducers } from './combinedReducer'
import fetchInitialDataSaga from './sagas/fetchInitialData'
import { HobbyState } from './state/hobbies/types'
import { UserState } from './state/users/types'

const sagaMiddleware = createSagaMiddleware()

const createStore = (): Store => {
  const store = reduxCreateStore(
    combinedReducers,
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
