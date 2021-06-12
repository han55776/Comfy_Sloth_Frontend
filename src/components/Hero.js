import React from 'react';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <section className='section-center hero'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
        </p>
        <Link to='/products' className='btn hero__hero-btn'>
          shop now
        </Link>
      </article>
      <article className='hero__img-container'>
        <img src={heroBcg} alt='nice table' className='hero__main-img' />
        <img src={heroBcg2} alt='person working' className='hero__accent-img' />
      </article>
    </section>
  );
};

export default Hero;
