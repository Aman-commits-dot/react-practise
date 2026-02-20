import React from 'react'

const Navbar = ({user}) => {
  console.log(user.name)
  return (
    <>
    <h1>This is the Navbar</h1>
    <h2>This is done by {user.name} and my age is {user.age}</h2>

    </>
  )
}

export default Navbar