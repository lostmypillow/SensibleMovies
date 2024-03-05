// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react'

function Person(props) {
  return (
    <>
    <h2>{props.name}</h2>
    <h3>Age:{props.age}</h3>
    </>

  )
}

function Incrementer() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
   alert("You changed the counter to " + counter)
  }, [counter])
  return (
    <>
    <button onClick={
      () => setCounter(
        (prevCount) => prevCount - 1
        )}>
          -
          </button>
    <h1>{counter}</h1>
    <button onClick={
      () => setCounter(
        (prevCount) => prevCount + 1
        )}>+</button>
    </>
  )
}


function App() {
  
const name = "Johnny"
// const isNameShowing = true
  return (
   <div>
    <p>hello {2+2}</p>
    {/* <h1>hello {isNameShowing? name: 'someone'}</h1> */}
    {name ? (
      <>
      <h1>yes it&apos;s showing</h1>
      </>
      ): (
      <>
      <h1> nah it&apos;s not</h1>
      </>
      )
      }
      <Person 
      name="John" 
      age={2+2}/>
<Incrementer />

      </div> 
  )
}

export default App
