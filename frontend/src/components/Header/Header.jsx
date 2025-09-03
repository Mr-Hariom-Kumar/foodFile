import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
          <h2>Order your favourite food here</h2>
          <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingridients and culinary expertise.</p>
          <a href='https://food-file-4wl3.vercel.app/#explore-menu'><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header
