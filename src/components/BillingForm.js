import React from 'react';
import axios from 'axios';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { placeOrder } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

import { useStripe } from '@stripe/react-stripe-js';
import { payment_url } from '../utils/constants';

const BillingForm = () => {
  const dispatch = useDispatch();
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

    dispatch(
      placeOrder(
        session,
        session.sessionId,
        token,
        cart,
        shipping_fee,
        total_amount
      )
    );

    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

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
