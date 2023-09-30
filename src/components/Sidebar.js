import React, { useState } from 'react'
import './Sidebar.css'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import  {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const ShowSidebar =()=> setSidebar(!sidebar)
  return (
    <>
    <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={ShowSidebar} />
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={ShowSidebar}>
            <li className="navbar toggle">
                <Link to = '#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
            </li>
    {SidebarData.map((item, index) => {
        return (
         <li key={index} className={item.cName}>
            <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
         </li>    
        )
    })}
        </ul>
    </nav>
    </>
  )
}

export default Sidebar