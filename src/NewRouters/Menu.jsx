import React from "react";
import { NavLink } from "react-router-dom";


const MenuLink = () => {

return(
    <>
    <h1>MenuLink Route</h1>
   <ul>
        <li>
        <NavLink className='navLink' to="/home">Home</NavLink>
        </li>
        <li>
        <NavLink className='navLink' to="/about">About</NavLink>
        </li>
        <li>
        <NavLink className='navLink' to="/contact">Contact</NavLink>
        </li>
   </ul>
    </>
)
}

export default MenuLink;