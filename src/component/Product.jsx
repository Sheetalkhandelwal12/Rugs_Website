import React, { useState } from 'react'
import ProductDetails from './ProductDetails'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import './Product.css'
import { IoMdClose } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";


const Product = ({product , setProduct , detail , view , close , setClose , cart , setCart , addtoCart }) => {
  
  const { loginWithRedirect , isAuthenticated} = useAuth0();

  const filterProduct = (product) =>{
   const update = ProductDetails.filter((x)=>{
    return x.category === product
   })
   setProduct(update)
  }
  const AllProduct = () =>{
    setProduct(ProductDetails)
  }

  return (
    <>
    {
      close ? 
      <div className="productDetail">
          <div className="container">
            <div className="productBox">
            <button onClick={() => setClose(false)}><IoMdClose/> </button>
             {
              detail.map((item)=>{
               return (
                <>
                <div className="productBox">
                  <div className="img_box">
                    <img src={item.Img} alt="" />
                  </div>
                  <div className="detail">
                    <h2>{item.category}</h2>
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit, at rerum exercitationem quidem nostrum debitis cumque temporibus corrupti similique eum voluptatem maiores dolores, assumenda, numquam possimus delectus nemo sunt.</p>
                    <h3>{item.price}</h3>
                    <button>Add to cart</button>
                    <title></title>
                    <meta name='description' content='' />
                  </div>
               </div>
                </>
               ) 
              })
             }
            </div>
          </div>
        </div> :
        null
    }
        
        <div className="products">
        <h2>Products</h2>
          <div className="container">
            <div className="filter">
              <div className="categories">
              <h3>Categories</h3>
                <ul>
                <li onClick={()=> AllProduct ()}>All Products</li>
                  <li onClick={()=> filterProduct ('rugs')}>rugs</li>
                  <li onClick={()=> filterProduct ('basket')}>basket</li>
                  <li onClick={()=> filterProduct ('handicraft')}>handicraft</li>
                  <li onClick={()=> filterProduct ('cuishione')}>cuishione</li>
                </ul>
              </div>
            </div>
            <div className="productBox">
              <div className="contant">
                {
                  product.map((item)=>{
                     return(
                      <>
                    <div className="box" key={item.id}>
                        <div className="img_box">
                            <img style={{height:'250px' , width:'300px'}} src={item.Img} alt={item.title} />
                            <div className='icon'  style={{display:'flex' , fontSize:'20px'}}>
                            {
                              isAuthenticated ? 
                          <li> <FaShoppingCart onClick={() => addtoCart(item)}/></li> : 
                          <li> <FaShoppingCart onClick={() => loginWithRedirect(item)}/></li>
                            }
                           <li><FaRegEye onClick={() => view (item)} /></li>
                           <li><CiHeart/></li>
                            </div>
                            <div className='detail'>
                              <p>{item.category}</p>
                              <h3>{item.title}</h3>
                              <h4>₹{item.price}</h4>
                            </div>
                        </div>
                    </div>
                    </>
                  )                   
                  })
                }
              </div>
            </div>
          </div>
        </div>      
    </>
  )
}

export default Product
