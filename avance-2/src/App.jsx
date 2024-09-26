import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Demo from './Components/Demo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Demo />
     <h1>HOLA MUNDO</h1>
    </>
  )
}

export default App
