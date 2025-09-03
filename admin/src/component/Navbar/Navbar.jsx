import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  
  return (
    <div className='navbar'>
         <a href='https://food-file-4wl3.vercel.app/'><img src={assets.logo} alt="logo"/></a>
        <img className='profile' src={assets.profile_image} alt="" />
        
    </div>
  )
}

export default Navbar
