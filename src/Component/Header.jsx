import React from 'react'
import Logo from "../Images/logo.svg"
function Header() {
  return (
   <>
   
   <header>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
        <div className='menus_center'>
            <ul>
                <li><a href="">Model S</a></li>
                <li><a href="">Model 3</a></li>
                <li><a href="">Model X</a></li>
                <li><a href="">Model Y</a></li>
                <li><a href="">Solar Roof</a></li>
                <li><a href="">Solar panel</a></li>
            </ul>
        </div>
        <div className='menus_center'>
            <ul>
                <li><a href="">Shop</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Menu</a></li>
            </ul>
        </div>
   </header>
   
   </>
  )
}

export default Header