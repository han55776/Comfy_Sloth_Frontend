import React from 'react';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <section className='page section section-center about'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='about__title'>
            <h2>our story</h2>
            <div className='about__underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
            doloribus veritatis dolorem unde ipsum, voluptatibus totam.
            Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
