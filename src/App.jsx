import { useState } from 'react'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-lg font-bold text-center mt-6'>Dashboard ETP</h1> */}
      <Dashboard />
    </>
  )
}

export default App
