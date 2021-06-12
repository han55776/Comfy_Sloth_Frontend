import {
  SIGN_UP_BEGIN,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_BEGIN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_BEGIN,
  PLACE_ORDER_BEGIN,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  REFUND_ORDER_BEGIN,
  REFUND_ORDER_SUCCESS,
  REFUND_ORDER_ERROR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_ORDERS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  GET_ORDERS_BY_ID_BEGIN,
  GET_ORDERS_BY_ID_SUCCESS,
  CREATE_SESSION_BEGIN,
  CREATE_SESSION_ERROR,
  CREATE_SESSION_SUCCESS,
} from '../actions';

const initialState = {
  user: null,
  user_loading: false,
  orders: [],
  orderList: [],
  user_error: false,
  login_success: false,
  session: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_BEGIN:
    case SIGN_IN_BEGIN:
    case SIGN_OUT_BEGIN:
    case PLACE_ORDER_BEGIN:
    case REFUND_ORDER_BEGIN:
    case GET_PRODUCTS_BEGIN:
    case GET_ORDERS_BY_ID_BEGIN:
    case CREATE_SESSION_BEGIN:
      return { ...state, user_loading: true };
    case GET_PRODUCTS_SUCCESS:
    case CREATE_SESSION_SUCCESS:
      return {
        ...state,
        session: action.payload,
        user_loading: false,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        user_loading: false,
      };
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user_loading: false,
        login_success: true,
        user: action.payload,
      };
    case SIGN_OUT_SUCCESS:
      return initialState;
    case GET_ORDERS_SUCCESS:
      return { ...state, orders: action.payload };
    case REFUND_ORDER_SUCCESS:
      return;
    case GET_ORDERS_BY_ID_SUCCESS:
      return { ...state, orderList: action.payload };
    case SIGN_UP_ERROR:
    case SIGN_IN_ERROR:
    case PLACE_ORDER_ERROR:
    case REFUND_ORDER_ERROR:
    case GET_PRODUCTS_ERROR:
    case CREATE_SESSION_ERROR:
      return {
        ...state,
        user_loading: false,
        user_error: true,
        error_message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
