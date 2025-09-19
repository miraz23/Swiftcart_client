import React, { useEffect } from 'react';
import Wrapper from './styles';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import Sort from '../../components/Sort/Sort';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Products = () => {
  useEffect(() => {
    document.title = 'Swift Cart | Products';
  }, []);

  return (
    <main className='sc'>
      <Breadcrumbs title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default Products;
