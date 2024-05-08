import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
  <Card userName="Vatsal" btnText="Click Me"/>
  <Card userName= "Het" />
    </>
  )
}

export default App
