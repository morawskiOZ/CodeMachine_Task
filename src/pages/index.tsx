import * as React from 'react'
import { HobbyWidget } from 'src/components/HobbyWidget'
import { Header } from 'src/components/Header'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <HobbyWidget />
    </>
  )
}
export default Home
