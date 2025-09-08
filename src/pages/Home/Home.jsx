import React from 'react'
import { Helmet } from "react-helmet-async";
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Swift Cart | Home</title>
      </Helmet>
      <div>
        <Banner />
      </div>
    </>
  )
}

export default Home