import * as React from 'react'
import { ReactElement } from 'react'
import './App.scss'
import { ContactInput } from './Input/Input'

export const App = (): ReactElement => {
  return (
    <div data-testid="app" className="App">
      Co tu się wyprawia
      <ContactInput onSearch={() => console.log('test')} />
    </div>
  )
}
