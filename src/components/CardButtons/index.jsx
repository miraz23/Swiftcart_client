import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import { useProductsContext } from '../../contexts/ProductsContext/ProductsContext';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import useAuth from '../../hooks/useAuth/useAuth';
// import { default_profile_image } from '';

const CartButtons = () => {
  const { user: currentUser } = useAuth();
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {!currentUser ? (
        <Link to='/login' className='auth-btn' onClick={closeSidebar}>
          Login <FaUserPlus />
        </Link>
      ) : (
        // <Link to='/profile' className='profile-btn' onClick={closeSidebar}>
        //   <img
        //     src={currentUser.photoURL || default_profile_image}
        //     alt='profile'
        //   />
        // </Link>
        <h3>Profile</h3>
      )}
    </Wrapper>
  );
};

export default CartButtons;
