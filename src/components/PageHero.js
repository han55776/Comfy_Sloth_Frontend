import React from 'react';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product }) => {
  return (
    <section className='pagehero'>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
