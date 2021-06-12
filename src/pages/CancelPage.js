import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CancelPage = () => {
  useEffect(() => {
    localStorage.setItem('session', undefined);
  });

  return (
    <div className='page-100 cancel'>
      <h3>Your Order was Cancelled</h3>
      <Link to='/' className='btn'>
        back home
      </Link>
    </div>
  );
};

export default CancelPage;
