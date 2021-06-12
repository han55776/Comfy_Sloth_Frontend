import React from 'react';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../actions/cartAction';

const CartContent = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const clearHandler = () => {
    dispatch(clearCart());
  };

  return (
    <section className='section section-center cartcontent'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='cartcontent__link-container'>
        <Link to='/products' className='cartcontent__link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='cartcontent__link-btn cartcontent__clear-btn'
          onClick={clearHandler}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};

export default CartContent;
