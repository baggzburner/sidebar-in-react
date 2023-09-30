import React from 'react'
import '../index.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/smallcomponents/Header'



const Home = () => {
  return (
    <div>
        <Sidebar />
        <Header heading="Homepage"/>
        
    </div>
  )
}

export default Home