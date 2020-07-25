import * as React from 'react'
import { HobbyInput } from 'src/components/HobbyList/HobbyInput'
import { UserInput } from '../components/UserList/UserInput/index'

const Home = (): React.ReactElement => {
  return (
    <>
      <UserInput />
      <HobbyInput />
      <h1>Hello Gatsby! Test CI</h1>
    </>
  )
}
export default Home
