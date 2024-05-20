import React from 'react'
import './Services.css'
import List from './List.js'

const Services = ({Image , Name , Description}) => {
  return (
    <>
   <div>
    <h1 className='Heading'>Our Services</h1>
    <div className="header_underline">
    </div>
   </div>
        <section className='section'>
          <div className="container">
            <div className="row">
              <div className="wrapper">
              <div className='card'>
              {
            List.map((item, index) => {
              return (
                <div key={index}>
                   <img src={item.Image} alt="" />
                  <h3>{item.Name}</h3>
                  <p>{item.Description}</p>
                  <a href="#" className='btn'>Read More</a>
                </div>
              );
            })
          }
              </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Services
