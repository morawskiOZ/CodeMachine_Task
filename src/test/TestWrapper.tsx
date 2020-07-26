import * as React from 'react'
import { Provider } from 'react-redux'
import { AppState } from 'src/store/createStore'
import { createTestStore } from './helpers/createTestStore'

interface Props {
  children: React.ReactElement
  state?: Partial<AppState>
}

export const TestWrapper = ({ children, state }: Props): React.ReactElement => {
  return (
    <Provider store={createTestStore(state as AppState)}>{children}</Provider>
  )
}
