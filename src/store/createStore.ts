import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import fetchInitialDataSaga from './sagas/fetchInitialData'
import hobbies from './state/hobbies/reducer'
import users from './state/users/reducer'

const sagaMiddleware = createSagaMiddleware()

const combinedReducers = () =>
  combineReducers({
    hobbies,
    users,
  })

const createStore = (): any => {
  const store = reduxCreateStore(
    combinedReducers(),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(fetchInitialDataSaga)

  return store
}

export default createStore
