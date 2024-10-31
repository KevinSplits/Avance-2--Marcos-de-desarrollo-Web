import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Demo from './Components/Demo'
import SignIn from './Components/SignIng'
import Login from './Components/Login'
import Register from './Components/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* < SignIn /> */}
      {/* < Demo/>   */}
      {/* <Login/> */}
      <Register/>
    </>
  )
}

export default App
