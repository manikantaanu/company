import React from 'react'
//import logo from '../images/Araminds-logo.png'
//import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (<>
       {/*  <div className="container-fluid bg-light p-4 ">
            <div className="row">
                <div className="col-lg-4">
                  <img src={logo} className="floatEnd"alt="logo"width="150"/>
                </div>
                <div className="col-lg-4">
                  <h5>Company</h5>
                    <ul>
                        <li><NavLink className="nav-link"to="/home">Home</NavLink> </li>
                        <li><NavLink className="nav-link"to="/about">About Us</NavLink> </li>
                        <li>Solutions</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
            <div className="col-lg-4">
                <h5> Address </h5>
                <p>AraMinds Inc. </p>
                <p>42840 Christy Street, Suite: 207,
                   Fremont, CA 94538. </p>
                <p>Email: info@araminds.com</p>
            </div>
            </div>
            
        </div> */}
        <div className="container-fluid bg-dark">
          <div className="container p-2">
    
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-white mt-3" style={{textAlign:'center'}}>© 2020-2021 Araminds®   |   All rights reserved</p>
                    </div>
                </div>
    
          </div>
        </div>
                </>)
    }
    
    
    export default Footer