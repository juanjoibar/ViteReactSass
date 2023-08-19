import { useState } from 'react'
import './app.scss'
import Header from './Header'
import Cuerpo from './Cuerpo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='hello-scss'>Hello React</div>
    <Header/>
    <Cuerpo/>
    </>
  )
}

export default App
