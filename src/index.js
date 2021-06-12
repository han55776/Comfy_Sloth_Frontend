import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Provider } from 'react-redux';
import store from './store';

const stripePromise = loadStripe(
  'pk_test_51Im8TuJvjbS7Fo0A9xbdLtiAGwCyiqK7Q6LnevEE7GWg6WabsU8pzUsLsk4ShTWzyzuktbikZzx2bGcQgcIRxPUg009nCKhxTo'
);

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>,

  document.getElementById('root')
);
