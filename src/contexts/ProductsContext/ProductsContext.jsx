import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../../components/reducers/ProductsReducer';
import { products_url as url } from '../../components/actions/ProductActions';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_REVIEWS_BEGIN,
  GET_SINGLE_PRODUCT_REVIEWS_ERROR,
  GET_SINGLE_PRODUCT_REVIEWS_SUCCESS,
} from '../../components/constants/ProductConstants';
import { AuthContext } from '../AuthContext/AuthContext';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  single_product_reviews_loading: false,
  single_product_reviews_error: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const data = response?.data;
      const products = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const raw = response?.data;
      const singleProduct = raw?.data ?? raw ?? {};
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const getProductReviews = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_REVIEWS_BEGIN });
    try {
      const response = await axios.get(`${url}/reviews/${id}`);
      const reviews = response.data;
      dispatch({
        type: GET_SINGLE_PRODUCT_REVIEWS_SUCCESS,
        payload: reviews.data,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_REVIEWS_ERROR });
    }
  };

  const reviewProduct = async (id, stars, comment) => {
    if (user) {
      const body = {
        name: user.displayName || 'User',
        email: user.email,
        rating: stars,
        comment: comment,
        productId: id,
      };
      try {
        const response = await axios.post(`${url}/reviews/`, body);
        getProductReviews(id);
        const { success, message } = response.data;
        return { success, message };
      } catch (error) {
        const { success, message } = error.response.data;
        return { success, message };
      }
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
        reviewProduct,
        getProductReviews,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};