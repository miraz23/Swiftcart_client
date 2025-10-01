import React, { useEffect } from 'react';
import Wrapper from './styles';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Shared/Breadcrumbs/Breadcrumbs';
import CartContent from '../../components/CartContent/CartContent';

const CartPage = () => {
  const { cart } = useCartContext();

  useEffect(() => {
    document.title = 'Swift Cart | Cart';
  }, []);

  if (cart.length < 1) {
    return (
      <Wrapper className='page-100 sc'>
        <div className='empty min-h-[56.7vh]'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main className='sc'>
      <Breadcrumbs title='cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
};

export default CartPage;
