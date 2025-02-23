import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/about-us/AboutUs'
import ContactUs from './pages/contactus/ContactUs'
import OurPartner from './pages/ourpartner/OurPartner'
import Blog from './pages/blog/Blog'
import HomeProduct from './components/ProductCard/HomeProduct'
import ProductPage from './components/ProductCard/ProductDetails'
import Index from './dashboard'



function App() {

  return (
    <>
      <>

        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-partner" element={<OurPartner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/catalogue" element={<HomeProduct />} />
          <Route path="/product-details/:productId" element={<ProductPage />} />
          <Route path="/dashboard" element={<Index />} />
        </Routes>
        <Footer />
      </>
    </>
  )
}

export default App
