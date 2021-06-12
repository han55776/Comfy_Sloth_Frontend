import React from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
  const featured = useSelector((state) => state.products.featured_products);
  const loading = useSelector((state) => state.products.products_loading);
  const error = useSelector((state) => state.products.products_error);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <section className='section featuredproducts'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featuredproducts__featured'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </section>
  );
};

export default FeaturedProducts;
