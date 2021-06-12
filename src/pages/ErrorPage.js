import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className='page-100 error'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </div>
  );
};

export default ErrorPage;
