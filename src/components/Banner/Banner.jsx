import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png';

const Banner = () => {
  return (
    <Wrapper className='sc section-center' style={{ backgroundImage: `url(${banner})` }}>
      <article className='content'>
        <h1>
            The best finds,<br />
            all in one place
        </h1>
        <p>
            SwiftCart is an e-commerce platform which sells wide variety of fashion
            essentials. It is a one-stop destination for all your
            fashion needs.
        </p>
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>
    </Wrapper>
  );
};

export default Banner;