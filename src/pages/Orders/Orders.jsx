import React, { useEffect } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import Error from '../../components/Shared/Error/Error';
import Loader from '../../components/Shared/Loader/Loader';
import Breadcrumbs from '../../components/Shared/Breadcrumbs/Breadcrumbs';
import OrderContent from '../../components/OrderContent/OrderContent';
import { useOrderContext } from '../../contexts/OrderContext/OrderContext';

const Orders = () => {
  const {
    orders,
    orders_loading: loading,
    orders_error: error,
  } = useOrderContext();

  useEffect(() => {
    document.title = 'Swift Cart | Orders';
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (orders.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>You have no orders</h2>
          <Link to='/products' className='btn'>
            Buy
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <Breadcrumbs title='orders' />
      <Wrapper className='page'>
        {orders.map((order) => {
          return <OrderContent key={order._id} {...order} />;
        })}
        <div className='link-container'>
          <Link to='/products' className='link-btn'>
            shop more
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

export default Orders;
