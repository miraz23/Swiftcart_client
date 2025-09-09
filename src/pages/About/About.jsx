import React, { useEffect } from 'react';
import Wrapper from './styles';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import aboutImg from '../../assets/about.png';

const About = () => {
  useEffect(() => {
    document.title = 'Swift Cart | About';
  }, []);

  return (
    <main className='sc'>
      <Breadcrumbs title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='pic' />
        <article>
          <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            SwiftCart was started by Mohiul Islam in September'25, with an aim to
            build a strong infrastructure for small bussiness owners to expand
            their reach, by bringing their products online. Primarily, SwiftCart 
            is a platform for selling fashion products online. We are working tirelessly to improve the experience of our end users and hope to soon reach 1000+
            customers.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default About;