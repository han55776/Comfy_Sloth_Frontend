import React, { useEffect } from 'react';
import { PageHero } from '../components';
import BillingForm from '../components/BillingForm';
import { formatPrice } from '../utils/helpers';

// extra imports
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, []);

  return (
    <main>
      <PageHero title='checkout' />
      <div className='checkout'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <div>
            <div className='checkout__title'>
              <h2>Summary</h2>
              <div className='underline'></div>
            </div>
            <div className='checkout__orderList'>
              <hr />
              {cart.map((item) => {
                return (
                  <div className='checkout__item' key={item._id}>
                    <div className='checkout__item-title' key={item._id}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='checkout__item-img'
                      />
                      <div>
                        <h4>{item.name}</h4>
                        <p>({item.id})</p>
                      </div>
                    </div>

                    <h5 className='checkout__price' key={item._id}>
                      {formatPrice(item.price)}
                    </h5>
                    <h4>X {item.amount}</h4>
                    <h5>{formatPrice(item.amount * item.price)}</h5>
                  </div>
                );
              })}
              <hr />
            </div>
            <BillingForm />
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;
