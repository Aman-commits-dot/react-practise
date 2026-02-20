import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const user={
    name:"Aamir khan",
    age:26
  }
  return (
    <>
    <Navbar user={user}/>

    
    </>
  )
}

export default App