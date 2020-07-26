import * as React from 'react'
import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { SagasActions } from 'src/store/sagas/types'
import createStore from './src/store/createStore'

export default ({ element }: { element: ReactElement }): ReactNode => {
  const store = createStore()

  store.dispatch({ type: SagasActions.FETCH_INITIAL_DATA })
  return <Provider store={store}>{element}</Provider>
}
