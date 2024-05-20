import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './component/Home'
import Footer from './component/Footer'
import Product from './component/Product'
import ProductDetails from './component/ProductDetails'
import About from './component/About'
import Cart from './component/Cart'
import Contact from './component/Contact'
import Services from './component/Services'

const App = () => {

  // Add to cart _____________________________

  const [cart , setCart] = useState([])
  const[product , setProduct] = useState(ProductDetails)

  // const exist = cart.find((x) => {x.id === product.id})

  const addtoCart = (product) =>{
    const exist = cart.find((x) => {x.id === product.id})

          if (exist) {
        alert('This product is already added to cart ')
                 } 
          else{
            setCart([...cart , {...product , qty:1 }])
            alert('Product is added to cart')
          }
  }

  console.log(cart);

  // ______________________________________________________
  
  const [close , setClose] = useState(false)

  const [detail , setDetail] = useState([])


  const searchBtn = (product) => {
    const change = ProductDetails.filter((x)=>{
      return x.category === product
    })
    setProduct(change)
  }

  const view = (product) =>{
    setDetail ([{...product}])
    setClose(true)
  }
  return (
    <div>
         <BrowserRouter>
         <Navbar searchBtn={searchBtn}/>
         <Routes>
          <Route path='/' element={<Home detail={detail} view = {view} close={close} setClose={setClose} addtoCart={addtoCart}/>}/>

          <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view = {view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtoCart={addtoCart}/> }/>

           <Route path='about' element={<About/>}/>

           <Route path='cart' element={ <Cart cart={cart} setCart={setCart}/> }/>

           <Route path='contact' element={<Contact/>} />

           <Route path='services' element={<Services/>}/>
           
         </Routes>
         <Footer/>
         </BrowserRouter>
    </div>
  )
}

export default App
