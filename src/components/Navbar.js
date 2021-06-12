import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';

import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../actions/productsAction';

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const sidebarHanlder = () => {
    dispatch(openSidebar());
  };

  return (
    <nav className='navbar'>
      <div className='navbar__nav-center'>
        <div className='navbar__nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' />
          </Link>
          <button
            type='button'
            className='navbar__nav-toggle'
            onClick={sidebarHanlder}>
            <FaBars />
          </button>
        </div>
        <ul className='navbar__nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
};

export default Nav;
