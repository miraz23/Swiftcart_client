import React from 'react';
import { useProductsContext } from '../../contexts/ProductsContext/ProductsContext';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='sc section'>
      <div className='title'>
        <h2>Featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  );
};

export default FeaturedProducts;
