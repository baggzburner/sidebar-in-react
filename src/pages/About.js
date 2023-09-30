import React from 'react'
import '../index.css'
import Sidebar from "../components/Sidebar"
import Header from '../components/smallcomponents/Header'

const About = () => {
  return (
    <div>
      <Sidebar />
      <Header heading="About me"/>
    </div>
  )
}

export default About