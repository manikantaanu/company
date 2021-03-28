import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/header.css'
import Logo from '../images/Araminds-logo.png'


const Header = () => {
    const styles={
        paddingRight:'4rem',
        borderBottom:'0.5px lightgray solid', 
        borderTop:'0.5px white solid'
    }
            
            return (<>

                <nav className="navbar navbar-expand-lg" style={styles}>
        
                <Link className="navbar-brand text-white" to="/">
                    <img src={Logo} alt="logo" width="100"/>
                </Link>
        
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        
                    <ul className="navbar-nav">
                    
                    <li className="nav-item active">
                            <NavLink className="nav-link text-black" activeClassName="text-danger " to="/home">Home</NavLink>
                    </li>
        
                    <li className="nav-item">
                           <NavLink className="nav-link "  activeClassName="text-danger bg-white" to="/about">About</NavLink>
                    </li>
                        {/* Drop down menu*/ }
                    <li className="nav-item dropdown">
                            <NavLink 
                            className="nav-link  dropdown-toggle "  
                            to="/training"
                            id="navbarDropdown" 
                            role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                            </NavLink>
        
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/e-commerce-enterprise-solutions">E‐Commerce Enterprise Solutions</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/microsoft-dynamics">Microsoft Dynamics</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/big-data-consulting">Big Data Consulting</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/data-science">Data Science</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/devops-and-automation">DevOps and Automation</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/cloud-services">Cloud Services</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/devops-services">DevOps Services</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/full-stack-development">Full Stack Development</Link>
                          </div>
        
                    </li>
        
                    <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="text-success bg-white" to="/careers">Career</NavLink>
                    </li>
        
                    <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={{ backgroundColor:'white', color:'purple' }} to="/contact">Contact</NavLink>
                    </li>
                   
                    </ul>
                </div>
                </nav>
        
                    </>)
}


export default Header