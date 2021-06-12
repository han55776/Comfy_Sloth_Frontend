import React from 'react';
import GridView from './GridView';
import ListView from './ListView';

import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.filter.filtered_products);
  const grid_view = useSelector((state) => state.filter.grid_view);

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
