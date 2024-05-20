import React, { useState } from 'react'
import './Contact.css'
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
  const { loginWithRedirect , logout , user, isAuthenticated} = useAuth0();
  const [users , setUser] = useState(
    {
      Name:'' , Email:'' , Contact :'' , Message:''
    }
  )

  let name , value

  const data = (e) =>{
     name = e.target.name;
     value = e.target.value;
     setUser({...users , [name]: value})
  }

  const sendData = async (e) =>{
   const {Name , Email , Contact  , Message} = user
   e.preventDefault();
   const options = {
    method:'POST', 
    headers:{
      'Content-Type' : 'application.json'
    },
    body: JSON.stringify({
      Name , Email , Contact  , Message
    })
   }

   const res =await fetch('https://e-commerce-7cc2a-default-rtdb.firebaseio.com/Message.json' , options)
   console.log(res);
   if (res) {
      alert('Your Message sent')
   }
   else{
    alert('An erroe occured')
   }
  }

  return (
    <>
       <div className="contact_container">
        <div className="content">
         <h2>Contact Us</h2>
            <div className="form">
                <form action="" method='post'>
                    <input type="text" name='Name' onChange={data} value={users.Name} placeholder='Enter your name here' required />
                    <input type="email" name='Email' onChange={data} value={users.Email} placeholder='Enter your E-mail' required />
                    <input type="text" name='Contact' onChange={data} value={users.Contact} placeholder='Enter your Contact' required />
                    <textarea name="Message"  onChange={data} value={users.Message} id="" placeholder='Your message'></textarea>
                    {
                      isAuthenticated ? 
                     <button type='submit' onClick={sendData}>Send</button> :
                     <button type='submit' onClick={()=> loginWithRedirect()}>Login</button> 
                    }
                </form>
            </div>
        </div>
       </div>
    </>
  )
}

export default Contact
