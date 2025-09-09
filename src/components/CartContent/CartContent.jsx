import React from 'react';
import Wrapper from './styles';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import { Link } from 'react-router-dom';
import CartColumns from '../CartColumns/CartColumns';
import CartItem from '../CartItem/CartItem';
import CartTotals from '../CartTotals/CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center sc'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;
