import React from 'react';
import { OrderContent, PageHero } from '../components';

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
