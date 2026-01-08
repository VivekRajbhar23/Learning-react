import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setcounter] = useState(0);
  return (
    <>
         <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>Counter App</h1>
              <h2>{counter}</h2>

              <button onClick= {() => {setcounter(counter+1)}}>➕ Increment</button>
              <button onClick= {() => {setcounter(counter-1)}} style={{ margin: "10px" }}>➖ Decrement</button>

              <button onClick={() => setcounter(0)}>🔄 Reset</button>
         </div>
    </>
  )
}

export default App
