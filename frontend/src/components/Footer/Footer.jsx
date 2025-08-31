import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, repudiandae voluptatum iste assumenda ipsum error hic illum nostrum minima corrupti molestias, libero, quod odit quasi? Vel incidunt quibusdam blanditiis quas.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91 7667411046</li>
              <li>766hariwork@gmail.com</li>
            </ul>
        </div> 
        <hr />
          <p className="footer-copyright">
            Copyright 2025 © Tomato.tech - all Right Reserved. 
          </p>
      </div>
    </div>
  )
}

export default Footer
