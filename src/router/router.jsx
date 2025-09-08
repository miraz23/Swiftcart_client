import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import NotFound from '../pages/NotFound/NotFound'
import RootLayout from '../components/Layouts/RootLayout/RootLayout'

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
            }
        ]
    }
])