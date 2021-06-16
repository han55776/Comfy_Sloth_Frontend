import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Provider } from 'react-redux';
import store from './store';

const stripePromise = loadStripe(process.env.REACT_APP_ST_PUBLIC);

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>,

  document.getElementById('root')
);
