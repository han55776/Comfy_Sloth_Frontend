import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageHero, Loading, Error } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../actions/userAction';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('yungmoosong91@gmail.com');
  const [password, setPassword] = useState('h2481211');

  const login_success = useSelector((state) => state.user.login_success);
  const user_loading = useSelector((state) => state.user.user_loading);
  const user_error = useSelector((state) => state.user.user_error);

  useEffect(() => {
    if (login_success) {
      history.push('/');
    }
  }, [login_success]);

  if (user_loading) {
    return <Loading />;
  }

  if (user_error) {
    return <Error />;
  }

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <main>
      <PageHero title='Login' />
      <section className='page login'>
        <div className='login__section'>
          <div className='title login__margin-bot'>
            <h2>Sign In</h2>
            <div className='underline'></div>
          </div>
          <form
            className='login__contact-form'
            action='your form spree id'
            method='POST'>
            <input
              type='email'
              className='login__form-input'
              placeholder='enter email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type='password'
              className='login__form-input'
              placeholder='enter password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </form>
          <button className='btn login__hero-btn' onClick={signInHandler}>
            Login
          </button>
          <Link to='/register'>Register an Account</Link>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
