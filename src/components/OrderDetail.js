import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../actions/userAction';
import { formatPrice } from '../utils/helpers';

const OrderDetail = ({ orderId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.user.token);
  const orderList = useSelector((state) => state.user.orderList);

  useEffect(() => {
    dispatch(getOrderById(orderId, token));
  }, [dispatch]);

  return (
    <main>
      <div className='page orderdetail'>
        <div>
          <div className='orderdetail__title'>
            <h2>order list</h2>
            <div className='underline'></div>
          </div>
          <div className='orderdetail__orderList'>
            <hr />
            {orderList.map((item) => {
              return (
                <div className='orderdetail__item' key={item._id}>
                  <div className='orderdetail__item-title'>
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className='orderdetail__item-img'
                    />
                    <div>
                      <h4>{item.name}</h4>
                      <p>({item.productId})</p>
                    </div>
                  </div>

                  <h5 className='orderdetail__price'>
                    {formatPrice(item.price)}
                  </h5>
                  <h4>X {item.qty}</h4>
                  <h5>{formatPrice(item.qty * item.price)}</h5>
                </div>
              );
            })}
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetail;
