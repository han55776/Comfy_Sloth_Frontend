import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='contact__content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
            vero?
          </p>
          <form
            className='contact__contact-form'
            action='your form spree id'
            method='POST'>
            <input
              type='email'
              className='contact__form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='contact__submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
