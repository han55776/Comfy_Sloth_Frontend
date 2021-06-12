import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageHero, Loading, Error } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../actions/userAction';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('yungmoosong91@gmail.com');
  const [password, setPassword] = useState('h2481211');
  const [confirmPassword, setConfirmPassword] = useState('h2481211');
  const [name, setName] = useState('gSong');

  const login_success = useSelector((state) => state.user.login_success);
  const user_loading = useSelector((state) => state.user.user_loading);

  useEffect(() => {
    if (login_success) {
      history.push('/');
    }
  }, [login_success]);

  const registerHandler = (e) => {
    e.preventDefault();

    if (password !== '' && password === confirmPassword) {
      dispatch(signUp(email, password, name));
    } else {
      alert('Something Went Wrong');
    }
  };

  if (user_loading) {
    return <Loading />;
  }

  return (
    <main>
      <PageHero title='Register' />
      <section className='page register'>
        <div className='register__section'>
          <div className='title register__margin-bot'>
            <h2>Sign Up</h2>
            <div className='underline'></div>
          </div>
          <form
            className='register__contact-form'
            action='your form spree id'
            method='POST'>
            <input
              type='email'
              className='register__form-input'
              value={email}
              placeholder='enter email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type='password'
              className='register__form-input'
              value={password}
              placeholder='enter password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              type='password'
              className='register__form-input'
              value={confirmPassword}
              placeholder='confirm password'
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />

            <input
              type='text'
              className='register__form-input'
              value={name}
              placeholder='enter your name'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </form>
          <button className='btn register__hero-btn' onClick={registerHandler}>
            Register Account
          </button>
          <Link to='/login'>Already Registered?</Link>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
