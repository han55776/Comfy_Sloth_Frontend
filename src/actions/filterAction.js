import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

export const loadProducts = () => (dispatch, getState) => {
  const {
    products: { products },
  } = getState();

  dispatch({ type: LOAD_PRODUCTS, payload: products });
};

export const filterProducts = () => (dispatch) => {
  dispatch({ type: FILTER_PRODUCTS });
};

export const sortProducts = () => (dispatch) => {
  dispatch({ type: SORT_PRODUCTS });
};

export const setGridView = () => (dispatch) => {
  dispatch({ type: SET_GRIDVIEW });
};

export const setListView = () => (dispatch) => {
  dispatch({ type: SET_LISTVIEW });
};

export const updateSort = (e) => (dispatch) => {
  // for demonstration
  // const name = e.target.name
  const value = e.target.value;
  console.log(value);
  dispatch({ type: UPDATE_SORT, payload: value });
};

export const updateFilters = (e) => (dispatch) => {
  let name = e.target.name;
  let value = e.target.value;
  console.log(name);
  console.log(value);
  if (name === 'category') {
    value = e.target.textContent;
  }
  if (name === 'color') {
    value = e.target.dataset.color;
  }
  if (name === 'price') {
    value = Number(value);
  }
  if (name === 'shipping') {
    value = e.target.checked;
  }
  dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
};

export const clearFilters = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTERS });
};
