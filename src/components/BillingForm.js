import React from 'react';
import axios from 'axios';
import { formatPrice } from '../utils/helpers';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useStripe } from '@stripe/react-stripe-js';
import { payment_url } from '../utils/constants';

const BillingForm = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const stripe = useStripe();

  const total_amount = useSelector((state) => state.cart.total_amount);
  const shipping_fee = useSelector((state) => state.cart.shipping_fee);
  const token = useSelector((state) => state.user.user.token);
  const cart = useSelector((state) => state.cart.cart);

  const placeOrderHandler = async (e) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    var body = {
      cart,
    };

    var response = await axios.post(`${payment_url}`, body, config);

    var session = response.data.session;

    var payload = {
      session,
      cart,
      token,
      shipping_fee,
      total_amount,
    };

    localStorage.setItem('session', JSON.stringify(payload));

    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  // const updateUserOrder = async (session) => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };

  //   var body = {
  //     stripe_id: session,
  //     cart,
  //     shipping_fee,
  //     total_amount,
  //   };

  //   console.log('passed placeOrder');

  //   await axios.post(`${order_url}`, body, config);
  // };

  return (
    <section className='billingform'>
      <div>
        <h5>
          subtotal : <span>{formatPrice(total_amount)}</span>
        </h5>
        <p>
          shipping fee : <span>{formatPrice(shipping_fee)}</span>
        </p>
        <p>
          Estemated Delivery : <span>10 Days</span>
        </p>
        <hr />
        <h4>
          order total : <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>

        <Link to='/checkout' className='btn' onClick={placeOrderHandler}>
          place order
        </Link>
      </div>
    </section>
  );
};

export default BillingForm;
