import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../../contexts/ProductsContext/ProductsContext';
import { single_product_url as url } from '../../actions/ProductActions';
import Loader from '../../components/Shared/Loader/Loader';
import Error from '../../components/Shared/Error/Error';
import ProductImages from '../../components/ProductImages/ProductImages';
import AddToCart from '../../components/AddToCart/AddToCart';
import Stars from '../../components/Stars/Stars';
import Breadcrumbs from '../../components/Shared/Breadcrumbs/Breadcrumbs';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
import UserReview from '../../components/UserReview/UserReview';
import Wrapper from './styles';
import { Link } from 'react-router-dom';

export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

const QuickView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  const {
    name,
    price,
    description,
    stock,
    rating: stars,
    numberOfReviews,
    reviews = [],
    _id: sku,
    company,
    images,
  } = product;

  useEffect(() => {
    document.title = `Swift Cart | ${name}`;
  }, [name]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='sc'>
      <Breadcrumbs title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={numberOfReviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && (
              <AddToCart className='cart-buttons' product={product} />
            )}
            <hr />
            <ReviewModal product={product} />
            <section className='reviews'>
              <h3>Reviews</h3>
              {reviews.length < 1 && (
                <p>No reviews yet, be the first one to review &#128512;</p>
              )}
              {reviews.map((review, index) => {
                return <UserReview key={index} {...review} />;
              })}
            </section>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuickView;
