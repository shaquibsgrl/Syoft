import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const data=useSelector((state)=>state.products)
 // console.log(data)
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export default Home