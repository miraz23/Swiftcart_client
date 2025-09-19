import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';

const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};


const ListView = ({ products }) => {
  return (
    <Wrapper className='sc'>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key='id'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn'>
                details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default ListView;
