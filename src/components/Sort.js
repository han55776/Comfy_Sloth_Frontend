import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { updateSort, setGridView, setListView } from '../actions/filterAction';

const Sort = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.filter.filtered_products);
  const grid_view = useSelector((state) => state.filter.grid_view);
  const sort = useSelector((state) => state.filter.sort);

  const setGridViewHandler = () => {
    dispatch(setGridView());
  };

  const setListViewHandler = () => {
    dispatch(setListView());
  };

  const updateSortOptions = (e) => {
    dispatch(updateSort(e));
  };

  return (
    <section className='sort'>
      <div className='sort__btn-container'>
        <button
          type='button'
          className={`${grid_view ? 'sort__active' : null}`}
          onClick={setGridViewHandler}>
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`${!grid_view ? 'sort__active' : null}`}
          onClick={setListViewHandler}>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort__sort-input'
          value={sort}
          onChange={updateSortOptions}>
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
