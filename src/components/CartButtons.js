import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../actions/productsAction';
import { signOut } from '../actions/userAction';

const CartButtons = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const total_items = useSelector((state) => state.cart.total_items);
  const user = useSelector((state) => state.user.user);

  const closeSidebarHandler = () => {
    dispatch(closeSidebar());
  };

  const signOutHandler = () => {
    if (window.confirm('Are You Sure to Logout?')) {
      dispatch(signOut());
      history.push('/');
    }
  };

  return (
    <div className='cartbutton'>
      <Link
        to='/cart'
        className='cartbutton__cart-btn'
        onClick={closeSidebarHandler}>
        <span className='cartbutton__cart-container'>
          <FaShoppingCart />
          <span className='cartbutton__cart-value'>{total_items}</span>
        </span>
        Cart
      </Link>
      {user ? (
        <button
          type='button'
          className='cartbutton__auth-btn'
          onClick={signOutHandler}>
          <FaUser />{' '}
          <span className='cartbutton__auth'>Hi,{`${user.name}`}</span>
        </button>
      ) : (
        // <button type='button' className='auth-btn' onClick={loginWithRedirect}>
        //   <FaUserPlus /> <span className='auth'>Login</span>
        // </button>

        <Link to='/login' className='cartbutton__auth-btn'>
          <FaUser /> <span className='cartbutton__auth'>Login</span>
        </Link>
      )}
    </div>
  );
};

export default CartButtons;
