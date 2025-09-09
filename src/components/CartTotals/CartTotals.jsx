import React from 'react';
import Wrapper from './styles';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import useAuth from '../../hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';

export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

const CartTotals = () => {
  const { user: currentUser } = useAuth();
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <Wrapper className='sc'>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {currentUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <Link to='/login' className='btn'>
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default CartTotals;
