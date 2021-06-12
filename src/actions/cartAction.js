import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

// add to carte
export const addToCart = (id, color, amount, product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
};
// remove item
export const removeItem = (id) => (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: id });
};

// toggle amount
export const toggleAmount = (id, value) => (dispatch) => {
  dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
};
// clear cart
export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};

export const calculate_totalAmount = () => (dispatch) => {
  dispatch({ type: COUNT_CART_TOTALS });
};
