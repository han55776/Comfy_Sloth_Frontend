import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  Orders,
  Login,
  Register,
  Success,
  Cancel,
} from './pages';

import { products_url as url } from './utils/constants';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productsAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(url));
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/orders'>
          <Orders />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />} />
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/cancel'>
          <Cancel />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
