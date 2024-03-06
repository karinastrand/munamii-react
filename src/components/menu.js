import React from 'react'
import './menu.css'

export default function menu() {
  return (
    <div>
        <ul>
        <li>
            <a 
            href="startpage.js" >
                Home
            </a>
        </li>
         <li>
            <a href="./productpage.js">
                Products
            </a>
        </li>
         <li>
            <a href="./aboutpage.js">
                About
            </a>
        </li> 
        </ul>
    </div>
  )
}
