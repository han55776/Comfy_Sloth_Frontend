import React from 'react';
import { formatPrice } from '../utils/helpers';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CartTotals = () => {
  const history = useHistory();

  const total_amount = useSelector((state) => state.cart.total_amount);
  const shipping_fee = useSelector((state) => state.cart.shipping_fee);
  const user = useSelector((state) => state.user.user);

  const redirectToLoginHandler = () => {
    if (user) {
      history.replace('/checkout');
    } else {
      history.replace('/login');
    }
  };

  return (
    <section className='carttotals'>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>

        <button onClick={redirectToLoginHandler} className='btn'>
          proceed to checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotals;
