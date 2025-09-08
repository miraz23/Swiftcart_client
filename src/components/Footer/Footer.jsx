import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footerSocialLinks">
        <div className='cursor-pointer'>
            <Link to='https://github.com/miraz23'><FaGithub size={36} color='#ab7a5f'/></Link>
        </div>
        <div className='cursor-pointer'>
            <FaFacebook size={36} color='#ab7a5f'/>
        </div>
        <div className='cursor-pointer'>
            <FaInstagram size={36} color='#ab7a5f'/>
        </div>
      </div>
      <div className="footerLinks">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/orders'>Orders</Link>
      </div>
      <div className='underline'>
      </div>
      <h5 className='mb-9'>
        &copy; {new Date().getFullYear()}
        <span> SwiftCart </span>
        - All Rights Reserved
      </h5>
    </Wrapper>
  );
};

export default Footer;