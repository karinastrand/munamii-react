import React from 'react'
import "./contactpage.css"
import Footer from './footer.js';
export default function contactpags() {
  return (
    <div>
        
        <div className='contact'>
          <h1>Contact us</h1>
          <p >
                  Home delivery service: <br/>
                  All the city of Stockholm and Malmo with additional cost.<br/>
                  Place to pick up order:<br/>Via la Costa<br/>
                  We will send you the GPS Location via WhatsApp.<br/>
                  Orders must be placed 2 days before for greater security, <br/>
                  processing and availability.<br/>      
                  Tuesday to Saturday<br/>
                  9 a.m. at 2 p.m.
              </p>
            </div>
        <Footer />
    </div>
  )
}
