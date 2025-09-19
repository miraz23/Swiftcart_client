import React from 'react'
import { Helmet } from "react-helmet-async";
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Swift Cart | Home</title>
      </Helmet>
      <Banner />
      <div className='sc'>
        <FeaturedProducts />
        <Services />
        <Contact />
      </div>
    </>
  )
}

export default Home