import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import './Sidebar.css';

// Display for the sidebar
function Sidebar() {

    // Setting the state for button clicks
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (

        // Sidebar
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="sidebar">
                <Link to="/" className='menubars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                <ul className='side-menu-items' onClick={showSidebar}>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <a href={item.path} target="_blank">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Sidebar;