import React from 'react';
import Wrapper from './styles';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt='main' />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
