import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import NotFound from '../pages/NotFound/NotFound'
import RootLayout from '../layouts/RootLayout/RootLayout'
import About from '../pages/About/About'
import Cart from '../pages/Cart/Cart'
import Products from '../pages/Products/Products'

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "login", 
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
            {
              path: "products",
              Component: Products
            },
            {
              path: "about",
              Component: About
            },
            {
              path: "cart",
              Component: Cart
            }
        ]
    }
])