import { useState } from 'react'
import Homepage from './pages/home/homePage'
import { GlobalStyle } from './Global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
      <GlobalStyle/>
    </>
  )
}

export default App
