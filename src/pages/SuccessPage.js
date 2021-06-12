import React, { useEffect } from 'react';
import { placeOrder } from '../actions/userAction';
import { clearCart } from '../actions/cartAction';
import { useDispatch } from 'react-redux';

const SuccessPage = () => {
  const dispatch = useDispatch();
  const { session, cart, shipping_fee, token, total_amount } = JSON.parse(
    localStorage.getItem('session')
  );

  useEffect(() => {
    dispatch(placeOrder(session, cart, token, shipping_fee, total_amount));

    dispatch(clearCart());

    localStorage.setItem('session', undefined);
  }, []);

  return (
    <div className='page-100 success'>
      <h2>Thank You So Much</h2>
      <h3>Your Order will be delivered within 10 business days</h3>
    </div>
  );
};

export default SuccessPage;
