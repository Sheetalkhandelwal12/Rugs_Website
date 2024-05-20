import React from 'react'
// import { Value } from 'sass'
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Cart.css'
// import { useAuth0 } from "@auth0/auth0-react";


const Cart = ({cart , setCart , addtoCart}) => {

  const incQty = (product) =>{
         const exist = cart.find((x)=>{
           return x.id === product.id
         })
         setCart(cart.map((item)=>{
           return item.id === product.id ? {...exist , qty:exist.qty + 1} : item
         }))
  }

  const decQty = (product) =>{
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    setCart(cart.map((item)=>{
      return item.id === product.id ? {...exist , qty:exist.qty - 1} : item
    }))
}

const removeProduct = (product) =>{
  const exist = cart.find((x)=>{
    return x.id === product.id
  })
  if (exist.qty > 0) {
    setCart(cart.filter((x)=>{
          x.id !== product.id
    }))
  }
}

const totalPrice = cart.reduce((price , item) => price + item.qty*item.price , 0)

  return (
    <>
      <div className="cartcontainer">
      {
        cart.length === 0 && 
        <div className="emptyCart">
        <h2 className='empty'> Cart is Empty</h2>
        <Link to='/product' className='emptyCartbtn'>Shop now</Link>
        </div>
      }
        <div className="content">
        {
            cart.map((item)=>{
               return(
                <div className="cart_item">
                  <div className="img_box">
                    <img src={item.Img} alt={item.title} />
                  </div>
                  <div className="detail">
                    <div className="info">
                    <h4>{item.category}</h4>
                    <h3>{item.title}</h3>
                    <p> Price: ₹{item.price}</p>
                    <div className="qty">
                      <button className='increase' onClick={()=>incQty(item)}>+</button>
                      <input type="text" value={item.qty} />
                      <button className='decrease' onClick={()=>decQty(item)}>-</button>
                    </div>
                      <h4 className='subTotal'>Sub total : ₹{item.price * item.qty}</h4>
                    </div>
                    <div className="close">
                    <button onClick={()=> removeProduct(item)}><IoCloseOutline /></button>
                    </div>
                  </div>
                </div>
               )
            })
        }
        </div>
        {
          cart.length > 0 && 
          <>
          <h2 className='totalprice'> Total ₹{totalPrice}</h2>
          <div className="checkout">Checkout</div>
          </>
        }
    </div>
    </>
  )
}

export default Cart
