import React from 'react';
import NavContainer from './styles';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartButtons from '../../CartButtons/';
import useAuth from '../../../hooks/useAuth/useAuth';
import { useProductsContext } from '../../../contexts/ProductsContext/ProductsContext';

const Nav = () => {
  const { user: currentUser } = useAuth();
  const { openSidebar } = useProductsContext();

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='flex items-center'>
            <div className='w-20 h-20'>
              <img src='logo.png' alt='' className='w-full h-full' />
            </div> 
            <span className='text-3xl'>Swift<span className='text-[#ab7a5f]'>Cart</span></span>
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
          
          {currentUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to='/orders'>orders</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Nav;