import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import ShippingForm from '../../components/ShippingForm/ShippingForm';
import StripeCheckout from '../../components/StripeCheckout/StripeCheckout';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import { useOrderContext } from '../../contexts/OrderContext/OrderContext';
import Breadcrumbs from '../../components/Shared/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';

const checkObjectProperties = (object) => {
  const isEmpty = Object.values(object).every((x) => x === null || x === '');
  return isEmpty;
};

const Checkout = () => {
  const {
    shipping: {
      name,
      address: { line1, postal_code, city, state, country },
    },
  } = useOrderContext();
  const { cart } = useCartContext();
  const [editingShipping, setEditingShipping] = useState(true);

  const confirmShipping = () => {
    setEditingShipping(false);
  };

  useEffect(() => {
    if (
      checkObjectProperties({ name, line1, postal_code, city, state, country })
    ) {
      return setEditingShipping(true);
    }
    setEditingShipping(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = 'Swift Cart | Checkout';
  }, []);

  return (
    <main className='sc'>
      <Breadcrumbs title='checkout' />
      {editingShipping ? (
        <ShippingForm confirmShipping={confirmShipping} />
      ) : (
        <Wrapper className='page'>
          {cart.length < 1 ? (
            <div className='empty'>
              <h2>Your cart is empty</h2>
              <Link to='/products' className='btn'>
                Fill it
              </Link>
            </div>
          ) : (
            <StripeCheckout />
          )}
        </Wrapper>
      )}
    </main>
  );
};

export default Checkout;
