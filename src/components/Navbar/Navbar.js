import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import {Button} from "../Button";
import { Link, animateScroll as scroll } from "react-scroll";
import Resume from "../../ResumePDF.pdf";
import Sidebar from "../Sidebar/Sidebar";
import './Navbar.css';


// Display for the navbar
class Navbar extends Component {

    // Button clicked state
    state = { clicked: false, scrollUp: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    /*
    handleScroll = () => {
        this.setState()
    } */

    render() {
        return(

            // Navbar
            <nav className="NavbarItems">
                <Sidebar />

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>

                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                
                                <Link
                                    activeClass="active"
                                    to={item.url}
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration= {500}
                                    className={item.cName}
                                >{item.title}</Link>
                                
                                
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>

            
        )
    }
}

export default Navbar;