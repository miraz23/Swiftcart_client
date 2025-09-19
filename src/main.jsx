import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router"
import AuthProvider from "./contexts/AuthProvider/AuthProvider"
import { ProductsProvider } from "./contexts/ProductsContext/ProductsContext"
import { CartProvider } from "./contexts/CartContext/CartContext"
import { FilterProvider } from "./contexts/FilterContext/FilterContext"
import { ToastContainer, Bounce } from 'react-toastify'
import { router } from './router/router.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient(); //Manages all the data fetching, caching, and synchronization for my application

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Helps to identify potential issues with the code */}
    <HelmetProvider>
      <QueryClientProvider client={queryClient}> {/* Bridge that connects your QueryClient (the data management hub) to all the components in my app */}
        <AuthProvider> {/* Provides the authentication context to the application */}
          <ProductsProvider> {/* Provides the products context to the application */}
          <FilterProvider> {/* Provides the filter context to the application */}
          <CartProvider> {/* Provides the cart context to the application */}
          <ToastContainer 
            position="top-right"
            autoclose={3000}
            hideProgressBar={false}
            newstOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <RouterProvider router={router}/> {/* Provides the router to the application */}
          </CartProvider>
          </FilterProvider>
          </ProductsProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
