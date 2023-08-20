import { useState } from 'react'
import './app.scss'
import Header from './Header'
import Cuerpo from './Cuerpo'
import StateContext from './Provider/StateContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StateContext>

   
    <Header/>
    <Cuerpo/>
    </StateContext>
    </>
  )
}

export default App
