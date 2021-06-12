import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../actions/productsAction';

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.products.single_product_loading);
  const error = useSelector((state) => state.products.single_product_error);
  const product = useSelector((state) => state.products.single_product);

  useEffect(() => {
    dispatch(fetchSingleProduct(`${url}${id}`));

    // console.log(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <div className='singleproduct'>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='singleproduct__product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='singleproduct__price'> {formatPrice(price)}</h5>
            <p className='singleproduct__desc'> {description}</p>
            <p className='singleproduct__info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='singleproduct__info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='singleproduct__info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
