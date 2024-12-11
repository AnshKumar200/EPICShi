import React from "react";
import './navbar.css';
import logo from '../../Images/github.png';

const Navbar=()=>{
    return (
        <div className="nav">
            <p id="title">
                <img src={logo} alt="" className="logo" id="logo"/>
                Epics Project
            </p>
                <ul>
                    <li>Our Vision</li>
                    <li>Research & Technology</li>
                    <li>Values</li>
                    <li>Articles</li>
                    <li>Contact Us</li>
                </ul>
        </div>
    )
}

export default Navbar;