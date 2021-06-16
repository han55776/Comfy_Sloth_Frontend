import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { completePendingOrder } from '../actions/userAction';
import { clearCart } from '../actions/cartAction';
import { useDispatch } from 'react-redux';

const SuccessPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(completePendingOrder(id));

    dispatch(clearCart());
  }, []);

  return (
    <div className='page-100 success'>
      <h2>Thank You So Much</h2>
      <h3>Your Order will be delivered within 10 business days</h3>
    </div>
  );
};

export default SuccessPage;
