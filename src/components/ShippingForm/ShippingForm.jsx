import React from 'react';
import { Wrapper, WrapperDiv } from './styles';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useOrderContext } from '../../contexts/OrderContext/OrderContext';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import { Country, State, City } from 'country-state-city';

const countries = [Country.getCountryByCode('BD')];
const states = State.getStatesOfCountry('BD');
const cities = City.getCitiesOfCountry('BD');

function ShippingForm({ confirmShipping }) {
  const {
    shipping: {
      name,
      phone_number,
      address: { line1, postal_code, city, state, country },
    },
    updateShipping,
  } = useOrderContext();
  const { cart } = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bangladesh uses 4-digit postal codes (e.g., 4100)
    const zipRegex = new RegExp('^[1-9][0-9]{3}$');

    if (!name) {
      return toast.error('Enter your Name');
    }
    // Accept international numbers in E.164 format (e.g., +8801880602693) or digits-only 10-15 length
    const normalizedPhone = String(phone_number || '')
      .trim()
      .replace(/[ \-()]/g, '');
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    if (!normalizedPhone || !phoneRegex.test(normalizedPhone)) {
      return toast.error('Enter a valid phone number');
    }
    if (!line1) {
      return toast.error('Enter your Address');
    }
    if (!postal_code) {
      return toast.error('Enter your Zip Code');
    }
    if (!zipRegex.test(postal_code)) {
      return toast.error('Enter Valid Zip Code');
    }
    if (!city) {
      return toast.error('Enter your City');
    }
    if (!state) {
      return toast.error('Enter your State');
    }
    if (!country) {
      return toast.error('Enter your Country');
    }
    return confirmShipping();
  };

  if (cart.length < 1) {
    return (
      <WrapperDiv className='page'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </WrapperDiv>
    );
  }

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Shipping</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className='form-control'>
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Full name'
              value={name}
              onChange={updateShipping}
            />
          </div>
          {/* end name */}
          {/* phone */}
          <div className='form-control'>
            <input
              type='tel'
              name='phone_number'
              className='input'
              placeholder='Phone number (e.g., +8801880602693)'
              value={phone_number}
              onChange={updateShipping}
            />
          </div>
          {/* end phone */}
          {/* address line 1 */}
          <div className='form-control'>
            <input
              type='text'
              name='line1'
              className='input'
              placeholder='Address'
              value={line1}
              onChange={updateShipping}
            />
          </div>
          {/* end address line 1 */}
          {/* address postal code */}
          <div className='form-control'>
            <input
              type='number'
              name='postal_code'
              className='input'
              placeholder='Zip Code'
              value={postal_code}
              onChange={updateShipping}
            />
          </div>
          {/* end address postal code */}
          {/* address city */}
          <div className='form-control'>
            <select
              name='city'
              className='input sort-input'
              value={city}
              onChange={updateShipping}
            >
              <option value=''>Select City</option>
              {cities.map((item, index) => {
                return (
                  <option key={index} value={item.isoCode}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end address city */}
          {/* address state */}
          <div className='form-control'>
            <select
              name='state'
              className='input sort-input'
              value={state}
              onChange={updateShipping}
            >
              <option value=''>Select State</option>
              {states.map((item, index) => {
                return (
                  <option key={index} value={item.stateCode}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end address state */}
          {/* address country */}
          <div className='form-control'>
            <select
              name='country'
              className='input sort-input'
              value={country}
              onChange={updateShipping}
            >
              <option value=''>Select Country</option>
              {countries.map((item, index) => {
                return (
                  <option key={index} value={item.countryCode}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end address country */}
          <button type='submit' className='btn shipping-btn'>
            confirm
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default ShippingForm;
