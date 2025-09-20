import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext/ProductsContext';
import { FaTimes } from 'react-icons/fa';
import SidebarContainer from './styles';
import CartButtons from '../CartButtons/CartButtons';
import useAuth from '../../hooks/useAuth/useAuth';

const Sidebar = () => {
  const { user: currentUser } = useAuth();
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} alt='Tomper Wear' />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
            <li><Link to='/' onClick={closeSidebar}> Home </Link></li>
            <li><Link to='/about' onClick={closeSidebar}> About </Link></li>
            <li><Link to='/products' onClick={closeSidebar}> Products </Link></li>
          {currentUser && (
            <li><Link to='/checkout' onClick={closeSidebar}> Checkout </Link></li>
          )}
          {currentUser && (
            <li><Link to='/orders' onClick={closeSidebar}> Orders </Link></li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
