import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const users = useSelector((state)=> state.users)
  console.log(users);
  return (
    <div>Home</div>
  )
}

export default Home