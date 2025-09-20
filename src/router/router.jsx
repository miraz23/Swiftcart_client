import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../pages/ResetPassword/ResetPassword'
import NotFound from '../pages/NotFound/NotFound'
import RootLayout from '../layouts/RootLayout/RootLayout'
import About from '../pages/About/About'
import Cart from '../pages/Cart/Cart'
import Products from '../pages/Products/Products'
import Checkout from '../pages/Checkout/Checkout'
import Orders from '../pages/Orders/Orders'

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
              path: "forgot-password",
              Component: ForgotPassword
            },
            {
              path: "reset-password",
              Component: ResetPassword
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
            },
            {
              path: "checkout",
              Component: Checkout
            },
            {
              path: "orders",
              Component: Orders
            }
        ]
    }
])