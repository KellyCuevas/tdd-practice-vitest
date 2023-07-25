import { useState } from 'react'
import './App.css'

function App() {
 const [show] =useState(true)

  return (
    <>
      <div className="visible">
        {show && (
          <h1>Hello World</h1>
        )}
       
      </div>
      
    </>
  )
}

export default App
