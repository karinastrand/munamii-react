import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import './Menu.css';
const Menu= () =>
{
  return (
    <>
        <nav >
            <ul className='layout'>
                <li>
                   <Link to="/">
                        Home
                   </Link>
                </li>
                <li>
                   <Link to="/products">
                        Products
                   </Link>
                </li>
                <li>
                   <Link to="/contact">
                        Contact Us
                   </Link>
                </li>
                <li>
                   <Link to="/about">
                        About Us
                   </Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}
export default Menu;
