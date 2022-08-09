import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const users = useSelector((state)=> state.users)
  return (
    <div>Home</div>
  )
}

export default Home