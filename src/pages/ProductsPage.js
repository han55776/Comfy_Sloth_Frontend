import React, { useEffect } from 'react';
import { Filters, ProductList, Sort, PageHero } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import {
  loadProducts,
  filterProducts,
  sortProducts,
} from '../actions/filterAction';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const sort = useSelector((state) => state.filter.sort);
  const filters = useSelector((state) => state.filter.filters);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortProducts());
  }, [dispatch, products, sort, filters]);

  return (
    <main>
      <PageHero title='products' />
      <section className='page products'>
        <div className='section-center product'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
