import React, { useState } from 'react';
import Modal from 'react-modal';
import OrderDetail from './OrderDetail';
import { formatPrice } from '../utils/helpers';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refundOrder } from '../actions/userAction';
import { useStripe } from '@stripe/react-stripe-js';

const Order = ({ _id, total, createdAt }) => {
  const [showModal, setShowModal] = useState(false);
  const [orderIdProp, setOrderIdProp] = useState('');

  const stripe = useStripe();
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state) => state.user.user.token);

  const refundOrderHandler = (e) => {
    e.preventDefault();
    if (
      window.confirm('Are You Sure that You Want to Refund?') &&
      window.confirm(
        'It Will Take Up To 10 Days to Get Refund. Is It OK for You?'
      )
    ) {
      dispatch(refundOrder(_id, token));
      window.alert('Refund Process was Done Successfully');
      history.replace('/');
    }
  };

  const openModalHandler = (e) => {
    setOrderIdProp(e.target.textContent);
    setShowModal(true);
  };

  return (
    <article className='order'>
      <div className='order__row'>
        <button className='order__order' onClick={openModalHandler}>
          <h5>{_id}</h5>
        </button>
        {/* <OrderDetail /> */}
        <Modal
          isOpen={showModal}
          contentLabel={'PodoModal'}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setShowModal(false)}
          ariaHideApp={false}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: 0,
              backgroundColor: 'rgba(20, 20, 20, 0.9)',
            },
            content: {
              height: '60vh',
              width: '80vw',
              margin: '100px auto',
            },
          }}>
          <OrderDetail orderId={orderIdProp} />
        </Modal>

        <h5 className='order__price'>{formatPrice(total)}</h5>

        <h5 className='order__date'>{createdAt.slice(0, 10)}</h5>
        <button
          type='button'
          className='order__link-btn'
          onClick={refundOrderHandler}>
          refund
        </button>
      </div>
    </article>
  );
};

export default Order;
