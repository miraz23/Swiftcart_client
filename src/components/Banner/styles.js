import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 1.25rem;
  .content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding: 1rem 1.25rem;
  }
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 576px) {
    padding: 5rem 2rem;
  }
  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    .content {
      text-align: left;
      max-width: 600px;
      margin: 0 auto;
      padding: 0;
    }
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
  @media (min-width: 1200px) {
    padding: 0 12rem;
  }
`;

export default Wrapper;