import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const counter = 5;
  let [counter,setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20){
    setCounter(counter + 1);
  }
  }

  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1);
    }
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
    <h1>hello Vatsal</h1>

    <h2>Counter value : {counter}</h2>
    
    <button onClick={addValue}>Add Value</button>

    <br/>
    <button onClick={removeValue}>Remove Value</button>
    <br/>
    <button onClick={resetValue}>Reset value</button>
    </>
  )
}

export default App
