import React from 'react'
import { Helmet } from "react-helmet-async";
import Wrapper from './styles';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Swift Cart | Not Found</title>
      </Helmet>
      <Wrapper className='sc h-screen'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page doesn't exist</h3>
        <Link to='/' className='btn'>
          Back Home
        </Link>
      </section>
    </Wrapper>
    </>
  )
}
