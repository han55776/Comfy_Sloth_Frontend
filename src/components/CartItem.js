import React from 'react';
import { formatPrice } from '../utils/helpers';
import { FaTrash } from 'react-icons/fa';

import { removeItem, calculate_totalAmount } from '../actions/cartAction';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItem(id));
    dispatch(calculate_totalAmount());
  };

  return (
    <article className='cartitem'>
      <div className='cartitem__title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='cartitem__name'>{name}</h5>
          <p className='cartitem__color'>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className='cartitem__price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='cartitem__price'>{formatPrice(price)}</h5>
      <h2 className='cartitem__amount'>{amount}</h2>
      <h5 className='cartitem__subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='cartitem__remove-btn'
        onClick={removeItemHandler}>
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
