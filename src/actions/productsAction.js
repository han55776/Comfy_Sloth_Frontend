import axios from 'axios';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

export const openSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_OPEN });
};

export const closeSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_CLOSE });
};

export const fetchProducts = (url) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_BEGIN });
  try {
    const response = await axios.get(url);

    const products = response.data;

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const fetchSingleProduct = (url) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
  try {
    const response = await axios.get(url);

    const singleProduct = response.data;
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct.data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  }
};
