import './style.scss'

import React from "react"
import Head from './components/Head'
import Main from './components/Main'
import Foot from './components/Foot'
import Catalog from './components/Catalog'
import Product from './components/Product'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'


function App() {
    
    

    return (
        <div class="wrapper">
            <Head />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="product" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
            <Foot />
        </div>
    );
}

export default App;
