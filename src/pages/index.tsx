import * as React from 'react'
import { HobbyWidget } from 'src/components/HobbyWidget'
import { Header } from 'src/components/Header'

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <HobbyWidget />
    </>
  )
}
export default Home
