import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from  '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const navigate = useNavigate();
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }

    const admin_url="https://foodfile-admin.onrender.com/"
  return (
    <div className='navbar'>
      <a href='https://food-file-4wl3.vercel.app/'><img src={assets.logo} alt="logo"/></a>
        <ul className='navbar-menu'>
            <Link to='/'><li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li></Link>
            <a href='#explore-menu'><li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li></a>
            <Link to ='/myorders'><li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>my order</li></Link>
            <a href='#footer'><li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li></a>
        </ul>
        <div className='navbar-right'>
            {/* <img src={assets.search_icon} alt=''/> */}
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className={getTotalCartAmount()?"dot":""}></div>
            </div>
            {!token? <button onClick={()=>setShowLogin(true)}>sign in</button>:
              <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                  <Link to={admin_url}><li><img src={assets.bag_icon} alt="" />Admin</li></Link>
                  <hr />
                  <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
                </ul>
              </div>

            }
           
        </div>    
    </div>
  )
}

export default Navbar
