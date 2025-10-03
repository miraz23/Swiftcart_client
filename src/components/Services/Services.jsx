import React from 'react';
import Wrapper from './styles';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            Your wish
            <br />
            Our command
          </h3>
          <p>
            Customer satisfaction is the top-most priorty for SwiftCart. It is
            the only the trust and support of our customers that we are now
            reaching greater heights.
          </p>
        </article>
        <div className='services-center'>
            <article className='service'>
                <span className='icon'><GiCompass /></span>
                <h4>mission</h4>
                <p>Our mission is to provide our customers the best in class products and services at a very reasonable price.</p>
            </article>
            <article className='service'>
                <span className='icon'><GiDiamondHard /></span>
                <h4>vision</h4>
                <p>Our vision is to take SwiftCart to greater heights, by providing our customers best in class service.</p>
            </article>
            <article className='service'>
                <span className='icon'><GiStabbedNote /></span>
                <h4>history</h4>
                <p>SwiftCart was started in September'25 with an initial aim to provide the best in class services to our customers.</p>
            </article>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;