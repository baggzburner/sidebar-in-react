import React from 'react'
import '../componentstyles/header.css'

const Header = (props) => {
  return (
    <div>
        <h1 className='title'>{props.heading}</h1>
    </div>
  )
}

export default Header