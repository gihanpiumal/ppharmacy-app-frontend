import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const users = useSelector((state)=> state.users)
  const userRoles = useSelector((state)=> state.userRoles)
  console.log(users);
  console.log(userRoles);
  return (
    <div>Home</div>
  )
}

export default Home