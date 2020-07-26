import * as redux from 'redux'
import { createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { combinedReducers } from 'src/store/combinedReducer'
import { AppState } from 'src/store/createStore'
import fetchInitialDataSaga from '../../store/sagas/fetchInitialData'

const sagaMiddleware = createSagaMiddleware()

export const createTestStore = (
  customState: AppState = {} as AppState,
): Store => {
  const store = createStore(
    combinedReducers,
    customState,
    redux.applyMiddleware(sagaMiddleware),
  )

  sagaMiddleware.run(fetchInitialDataSaga)
  return store
}
