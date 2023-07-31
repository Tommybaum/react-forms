import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

function App() {
  
const [token, setToken] = useState(null)
  return (
    <>
      <h1>buford</h1>
      <SignUpForm setToken={setToken}/> 
      
      <Authenticate token={token}/>
    </>
  )
}

export default App
