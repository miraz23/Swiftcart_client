import React from 'react';
import Wrapper from './styles';

const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

const OrderItem = ({ name, price, quantity, image, color, size, product }) => {
  return (
    <Wrapper className='sc'>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color : <span style={{ background: color }}></span>
          </p>
          <p className='size'>
            size :&nbsp;<span>{size}</span>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <h5 className='quantity'>{quantity}</h5>
      <h5 className='subtotal'>{formatPrice(price * quantity)}</h5>
    </Wrapper>
  );
};

export default OrderItem;
