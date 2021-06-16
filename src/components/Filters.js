import React from 'react';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { updateFilters, clearFilters } from '../actions/filterAction';

const Filters = () => {
  const dispatch = useDispatch();

  const all_products = useSelector((state) => state.filter.all_products);
  const text = useSelector((state) => state.filter.filters.text);
  const category = useSelector((state) => state.filter.filters.category);
  const company = useSelector((state) => state.filter.filters.company);
  const color = useSelector((state) => state.filter.filters.color);
  const min_price = useSelector((state) => state.filter.filters.min_price);
  const price = useSelector((state) => state.filter.filters.price);
  const max_price = useSelector((state) => state.filter.filters.max_price);
  const shipping = useSelector((state) => state.filter.filters.shipping);

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  const updateFilterOptions = (e) => {
    dispatch(updateFilters(e));
  };

  const clearFilterOptions = () => {
    dispatch(clearFilters());
  };

  // dispatch 업데이트 하기
  return (
    <section className='filters'>
      <div className='filters__content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='filters__form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='filters__search-input'
              value={text}
              onChange={updateFilterOptions}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className='filters__form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilterOptions}
                    type='button'
                    name='category'
                    className={`${
                      category === c.toLowerCase() ? 'filters__active' : null
                    }`}>
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className='filters__form-control'>
            <h5>company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilterOptions}
              className='filters__company'>
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* 
          colors
          */}
          <div className='filters__form-control'>
            <h5>colors</h5>
            <div className='filters__colors'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilterOptions}
                      data-color='all'
                      className={`${
                        color === 'all'
                          ? 'filters__all-btn filters__active'
                          : 'filters__all-btn'
                      }`}>
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? 'filters__color-btn filters__active'
                        : 'filters__color-btn'
                    }`}
                    data-color={c}
                    onClick={updateFilterOptions}>
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* 
end of           colors
          */}
          {/* price */}
          <div className='filters__form-control'>
            <h5>price</h5>
            <p className='filters__price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              onChange={updateFilterOptions}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shippping */}
          <div className='filters__form-control filters__shipping'>
            <label htmlFor='filters__shipping'> free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilterOptions}
              checked={shipping}
            />
          </div>
          {/* end of  shippping */}
        </form>
        <button
          type='button'
          className='filters__clear-btn'
          onClick={clearFilterOptions}>
          {' '}
          clear filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
