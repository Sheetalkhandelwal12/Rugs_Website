import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <h2>Art & Craft House</h2>
            </div>
            <div className="detail">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus sint quod atque maxime corporis eos id laborum eaque? Error!</p>
              <div className="icon">
                <li> <FaFacebook/> </li>
                <li><FaInstagram/></li>
                <li><FaPinterest/></li>
              </div>
            </div>
          </div>

          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>

          <div className="page">
          <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
