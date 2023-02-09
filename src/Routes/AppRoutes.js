import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Pages/Layout';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Product from '../Pages/Product';
import ProductDetailScreen from '../Components/Product/ProductDetailScreen';



const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='products' element={<Product />} />
            <Route path='product/:id' element={<ProductDetailScreen />} />

            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes