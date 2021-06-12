import React from 'react';
import Product from './Product';

const GridView = ({ products }) => {
  return (
    <section className='gridview'>
      <div className='gridview__products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
