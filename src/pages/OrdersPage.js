import React from 'react';
import { Link } from 'react-router-dom';
import { OrderContent, PageHero } from '../components';

// import { useSelector } from 'react-redux';

const OrderPage = () => {
  return (
    <section>
      <PageHero title='my orders' />
      <div className='page'>
        <OrderContent />
      </div>
    </section>
  );
};

export default OrderPage;
