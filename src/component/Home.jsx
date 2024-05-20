import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import './Home.css'
import Banner from '../assets/Images/Banner.png'
import Basket from '../assets/Images/Basket.jpg'
import handicrat from '../assets/Images/Handicraft Items.jpg'
import cuishion from '../assets/Images/Cuishions.jpg'
import Product_1 from '../assets/Images/Product_1.jpg'
import { FaTruckMoving } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import HomeProduct from './HomeProduct'
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import Product_9 from '../assets/Images/Product_9.jpg'
import { IoMdClose } from "react-icons/io";


const Home = ({detail , view , close , setClose , addtoCart}) => {
    const [homeProduct , setHomeProduct] = useState(HomeProduct)
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
    

        <div className='top_banner'>
          <div className='container'>
            <div className="detail">
                <h2>Bestsellers of art & craft house</h2>
                    <Link style={{display:'flex'}} to={'/product'} className='link'>Shop Now <FaArrowRight/></Link>
            </div>
            <div className="img_box">
               <img style={{height:'500px', width:'500px'}} src={Banner} alt="" />
            </div>
          </div>
        </div>

        <div className="product_type">
            <div className="conteiner_1">
                <div className="box">
                    <div className="img-box">
                        <img style={{height:'300px', width:'300px' , marginTop:'10px'}} src={Product_1} alt="" />
                    </div>
                    <div className="detail_1">
                        <p>23 Products</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img style={{height:'300px', width:'300px' , marginTop:'10px'}} src={Basket} alt="" />
                    </div>
                    <div className="detail_1">
                        <p>18 Products</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img style={{height:'300px', width:'300px' , marginTop:'10px'}} src={cuishion} alt="" />
                    </div>
                    <div className="detail_1">
                        <p>17 Products</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img style={{height:'300px', width:'300px' , marginTop:'10px'}} src={handicrat} alt="" />
                    </div>
                    <div className="detail_1">
                        <p>22 Products</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                      <FaTruckMoving/>
                    </div>
                    <div className="detail">
                       <h3>Free Shipping</h3>
                       <p>Order Above</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                    <MdCurrencyRupee/>
                    </div>
                    <div className="detail">
                       <h3>Return & Refund</h3>
                       <p>within 14 days</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                      <RiDiscountPercentFill/>
                    </div>
                    <div className="detail">
                       <h3>% off </h3>
                       <p>On every order</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                      <FaHeadset/>
                    </div>
                    <div className="detail">
                       <h3>Customer Support</h3>
                       <p>Call Support</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="product">
            <h1>Top Products</h1>
            <div className="container">
            {
               homeProduct.map((item)=>{
                  return(
                    <>
                    <div className="box" key={item.id}>
                        <div className="img_box">
                            <img style={{height:'250px' , width:'300px'}} src={item.Img} alt={item.title} />
                            <div className='icon'  style={{display:'flex' , fontSize:'20px'}}>
                           <FaShoppingCart onClick={() => addtoCart(item)}/>
                           <FaRegEye onClick={() => view (item)}/>
                           <CiHeart/>
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
            <div className="box"></div>
            </div>
        </div>

        <div className="banner">
        <div className="container">
        <div className="detail">
                <h4>Latest Products Added</h4>
                <h3>From Fiber to Floor: The Story of Rugs</h3>
                <p><FaDollarSign/> 920</p>
                <Link to={'/product'} className='link'> Shop Now </Link>
            </div>
            <div className="img-box">
                <img style={{height:'400px' , width:'400px'}} src={Product_9} alt="" />
            </div>
        </div>     
        </div>
    </>
  )
}

export default Home
