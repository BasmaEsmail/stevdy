import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
    const [navback,setNavback]=useState(false)
    const changeBack=()=>
    {
        if(window.scrollY>=60)
        {
            setNavback(true)
        }
        else
        {
            setNavback(false)
        }
    }
    window.addEventListener('scroll',changeBack)
    return(
        <React.Fragment>
            <nav className={ navback ? "navbar navbar-expand-sm fixed-top navback":" navbar navbar-expand-sm fixed-top"}>
                <ul className="navbar-nav">
                    <li >
                    <NavLink className="navlink" to="/home">
                        <img className='navimg' src={require('../img/logo.png')} alt="logo"/>
                    </NavLink>
                    </li>
                    <li className="nav-item ">
                    <NavLink className="navlink" to="/browser">Browser</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="navlink" to="/bootcamps">Bootcamps</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="navlink" to="/how">How It Works</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="navlink" to="/test">Testemonial</NavLink>
                    </li>
                    <li className="nav-item">
                    <Link to="/about"><button  className="navbt">About us</button></Link>
                    </li>
                </ul>
            </nav> 
        </React.Fragment>
    )
}
export  default Navbar;