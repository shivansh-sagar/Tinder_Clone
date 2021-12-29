import React from 'react'
import "./Header.css";
import logo from './img/Tinder-Emblem.png'


function Header() {
    return (
        <div className='Header'>
           
           <button className='btn1'><i className='icon' class="fas fa-user"></i></button>
           
           <img className='header-logo' src={logo} alt="" ></img>

           <button className='btn1'><i className='icon' class="fas fa-user"></i></button>
        </div>
    )
}

export default Header
