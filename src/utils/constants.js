import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'my orders',
    url: '/orders',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

//export const products_url = 'https://course-api.com/react-store-products';
export const products_url = `${process.env.REACT_APP_BACKEND_DOMAIN}/api/products`;

export const user_url = `${process.env.REACT_APP_BACKEND_DOMAIN}/api/users`;

export const order_url = `${process.env.REACT_APP_BACKEND_DOMAIN}/api/orders`;

export const payment_url = `${process.env.REACT_APP_BACKEND_DOMAIN}/api/payments`;

export const single_product_url = `${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/`;
