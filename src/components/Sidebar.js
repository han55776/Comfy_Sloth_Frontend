import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';

import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../actions/productsAction';

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.products.isSidebarOpen);
  const user = useSelector((state) => state.user.user);

  return (
    <div className='side'>
      <aside
        className={`${
          isSidebarOpen ? 'side__sidebar side__show-sidebar' : 'side__sidebar'
        }`}>
        <div className='side__sidebar-header'>
          <img src={logo} className='side__logo' alt='comfy sloth' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </div>
  );
};

export default Sidebar;
