import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cancelPendingOrder } from '../actions/userAction';

const CancelPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(cancelPendingOrder(id));
  }, []);

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
