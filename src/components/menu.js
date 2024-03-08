import React from 'react'
import './Menu.css'
import { Outlet, Link } from 'react-router-dom';

const Menu=()=> {
  return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li> 
                <li>
                    <Link to="/contact">Contact</Link>
                </li> 
            </ul>
        </nav>
        <Outlet />
    </>
  )
};
export default Menu;

