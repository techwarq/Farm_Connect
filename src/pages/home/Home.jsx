import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import HeroSection from '../../Components/heroSection/HeroSection'
import Filter from '../../Components/filter/Filter'
import ProductCard from '../../Components/productCard/ProductCard'
import Track from '../../Components/track/Track'
import Testimonial from '../../Components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state)=> state.cart)
  
    console.log(cartItem)
  
    const addCart = () => {
      dispatch(addToCart("shirt"));
    }
  
    const deleteCart = () => {
      dispatch(deleteFromCart("shirt"));
    }
    return (
      
        <Layout>
        
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
  
      </Layout>
    
      
    )
  }
  
  export default Home