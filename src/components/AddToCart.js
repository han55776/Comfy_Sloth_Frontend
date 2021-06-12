import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from './AmountButtons';

import { addToCart, calculate_totalAmount } from '../actions/cartAction';
import { useDispatch } from 'react-redux';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const addToCartHandler = () => {
    dispatch(addToCart(id, mainColor, amount, product));
    dispatch(calculate_totalAmount());
  };

  return (
    <section className='addtocart'>
      <div className='addtocart__colors'>
        <span> colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color
                    ? 'addtocart__color-btn addtocart__active'
                    : 'addtocart__color-btn'
                }`}
                onClick={() => setMainColor(color)}>
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to='/cart' className='btn' onClick={addToCartHandler}>
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
