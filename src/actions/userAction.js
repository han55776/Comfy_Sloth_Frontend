import axios from 'axios';
import { user_url, order_url, payment_url } from '../utils/constants';
import {
  SIGN_IN_BEGIN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_BEGIN,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_OUT_BEGIN,
  SIGN_OUT_SUCCESS,
  PLACE_ORDER_BEGIN,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  REFUND_ORDER_BEGIN,
  REFUND_ORDER_ERROR,
  REFUND_ORDER_SUCCESS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_ERROR,
  GET_PRODUCTS_BEGIN,
  GET_ORDERS_BY_ID_BEGIN,
  GET_ORDERS_BY_ID_SUCCESS,
  CREATE_SESSION_BEGIN,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_ERROR,
} from '../actions';

export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: SIGN_IN_BEGIN });
  try {
    const data = { email, password };
    const response = await axios.post(`${user_url}/login`, data);

    const user = response.data;

    dispatch({ type: SIGN_IN_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: SIGN_IN_ERROR });
  }
};

export const signUp = (email, password, name) => async (dispatch) => {
  dispatch({ type: SIGN_UP_BEGIN });
  try {
    const data = { email, password, name };
    const response = await axios.post(`${user_url}/register`, data);

    const user = response.data;

    dispatch({ type: SIGN_UP_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: SIGN_UP_ERROR });
  }
};

export const signOut = () => (dispatch) => {
  dispatch({ type: SIGN_OUT_BEGIN });

  dispatch({ type: SIGN_OUT_SUCCESS });
};

export const createCheckoutSession = (cart, token) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SESSION_BEGIN });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    var body = {
      cart,
    };

    const response = await axios.post(`${payment_url}`, body, config);

    dispatch({ type: CREATE_SESSION_SUCCESS, payload: response.data.session });
  } catch (error) {
    dispatch({ type: CREATE_SESSION_ERROR });
  }
};

export const placeOrder = (
  session,
  cart,
  token,
  shipping_fee,
  total_amount
) => async (dispatch) => {
  try {
    dispatch({ type: PLACE_ORDER_BEGIN });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    var body = {
      stripe_id: session,
      cart,
      shipping_fee,
      total_amount,
    };

    await axios.post(`${order_url}`, body, config);

    dispatch({ type: PLACE_ORDER_SUCCESS });
  } catch (error) {
    dispatch({ type: PLACE_ORDER_ERROR });
  }
};

export const requestRefund = (orderId, token) => async (dispatch) => {
  try {
  } catch (error) {}
};

export const refundOrder = (orderId, token) => async (dispatch) => {
  try {
    dispatch({ type: REFUND_ORDER_BEGIN });

    var body = {
      orderId,
    };

    const headers = { Authorization: `Bearer ${token}` };

    await axios.delete(`${order_url}`, { data: body, headers });

    dispatch({ type: REFUND_ORDER_SUCCESS });
  } catch (error) {
    dispatch({ type: REFUND_ORDER_ERROR });
  }
};

export const getMyOrders = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.get(`${order_url}`, config);

    const orders = await response.data;

    dispatch({ type: GET_ORDERS_SUCCESS, payload: orders.data });
  } catch (error) {
    dispatch({ type: GET_ORDERS_ERROR });
  }
};

export const getOrderById = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_BY_ID_BEGIN });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.get(`${order_url}/${id}`, config);

    const orderList = await response.data;

    dispatch({
      type: GET_ORDERS_BY_ID_SUCCESS,
      payload: orderList.data.products,
    });
  } catch (error) {
    dispatch({ type: GET_ORDERS_ERROR });
  }
};
