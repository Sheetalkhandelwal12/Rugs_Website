import React, { useState } from 'react'
import { FaTruckMoving } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

import './Navbar.css'

const Navbar = ({searchBtn}) => {
    const { loginWithRedirect , logout , user, isAuthenticated} = useAuth0();
    const [search , setSearch] = useState()
  return (
    <>
        <div className='free'>
       <div className='icon'>
        <FaTruckMoving/>
       </div>
       <p>
        Free shipping upto order of $2000
       </p>
    </div>

    <div className='main_header'>
      <div className='container'>
        <div className='logo'>
            <h2>Art & Craft House</h2>
        </div>
        <div className='serach_box'>
           <input type="text" value={search} onChange={(e)=>{ setSearch(e.target.value)
           }} placeholder='Enter the product name' />
           <button onClick={()=>searchBtn(search)}> Search </button>
        </div>
        <div className='wishlist'>
        {
            isAuthenticated && 
            (
                <div className='account'>
           <div className='user_icon'>
           <CiUser/>
           </div>
           <p>Hello , {user.name}</p>
        </div>
            )
        }
        
           <div className='second_icon'>
            <Link to={'/'} className='link'><CiHeart/></Link>
            <Link to={'/cart'} className='link'><FaShoppingCart/></Link>
            </div>
        </div>
      </div>
    </div>

    <div className='header'>
        <div className='continer_1'>
         <div className='navbar'>
         <ul>
          <li>
            <Link to={'/'} className='link'>Home</Link>
          </li>
          <li>
            <Link className='link' to={'/about'}  >About Us</Link>
          </li>
          <li>
            <Link to={'/product'} className='link'>Products</Link>
          </li>
          {/* <li>
            <Link className='link'>Services</Link>
          </li> */}
          <li>
            <Link to={'/contact'} className='link'>Contact Us</Link>
          </li>
          <li>
            <Link to={'/services'}>Services</Link>
          </li>
         </ul>
         </div>

         <div className='auth'>
         {
            isAuthenticated ? 
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} > <CiLogout/></button>
            :
            <button onClick={()=> loginWithRedirect() }><CiLogin/></button>
         }
          
         </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
