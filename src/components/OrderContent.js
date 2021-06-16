import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OrderColumns from './OrderColumns';
import Order from './Order';

import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '../actions/userAction';

const OrderContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login_success = useSelector((state) => state.user.login_success);
  const user = useSelector((state) => state.user.user);
  const orders = useSelector((state) => state.user.orders);

  useEffect(() => {
    if (!login_success) {
      history.replace('/login');
    } else {
      dispatch(getMyOrders(user._id, user.token));
    }
  }, [dispatch]);

  return (
    <section className='section section-center'>
      <OrderColumns />
      {orders.map((item) => {
        return <Order key={item._id} {...item} />;
      })}
      <hr />
    </section>
  );
};

export default OrderContent;
