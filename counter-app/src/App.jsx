import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setcounter] = useState(0);
  return (
    <>
         <div>
              <h1>Counter App</h1>
              <h2>{counter}</h2>

              <button onClick= {() => {setcounter(counter+1)}}>Click +</button>
              <button onClick= {() => {setcounter(counter-1)}}>Click -</button>

              <button onClick={() => setcounter(0)}>Reset</button>
         </div>
    </>
  )
}

export default App
