import React from 'react'
import './About.css'
import About_us from '../assets/Images/About.jpg'

const About = () => {
  return (
    <>
      <section className='hero'>
         <div className="heading">
          <h1>About Us</h1>
         </div>
         <div className="container">
          <div className="hero-content">
              <h2>Welcome to our website</h2>
              <p>Art N Craft House Is The Best Manufacturer Of Handmade Rugs, Cushion Covers, Throws And Many More Handmade Items. We Make All Kind Of Rugs In (Wool, Cotton, Chenille, Jute, Hemp, Chindi etc). Art N Craft House Also Specialized In Making Custom Orders In Rugs, Cushion Cover, Throws, Handmade Bags.</p>
          </div>
          <div className="hero_image">
               <img src={About_us} alt="" srcset="" />
          </div>
         </div>
      </section>
    </>
  )
}

export default About
