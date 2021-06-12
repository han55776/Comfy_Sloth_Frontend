import React from 'react';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

import { useSelector } from 'react-redux';

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  if (cart.length < 1) {
    return (
      <div className='cart'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </div>
    );
  }
  return (
    <main>
      <PageHero title='cart' />
      <div className='page'>
        <CartContent />
      </div>
    </main>
  );
};

export default CartPage;
