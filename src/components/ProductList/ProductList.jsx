import React from 'react';
import { useFilterContext } from '../../contexts/FilterContext/FilterContext';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h5 className='sc'>Sorry, no products matched your search</h5>;
  }

  if (grid_view === false) {
    return <ListView className='sc' products={products}>product list</ListView>;
  }

  return <GridView className='sc' products={products}>product list</GridView>;
};

export default ProductList;
