import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import { toast } from 'react-toastify';
import LoadingButton from '../../components/LoadingButton/LoadingButton';

function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error('Please enter e-mail');
    }

    setIsSubmitting(true);
    forgotPassword(email)
      .then((res) => {
        toast.info(
          'A password reset link has been sent, check your inbox and follow the instruction'
        );
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      })
      .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    document.title = 'Swift Cart | Forgot Password';
  }, []);

  return (
    <Wrapper className='sc h-[calc(100vh-19rem)] flex items-center justify-center'>
      <div>
        <div className='title'>
          <h2>Forgot Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='form-control w-full'>
            <input
              type='email'
              className='input'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* end email */}

          <LoadingButton
            disabled={isSubmitting}
            type='submit'
            className='btn forgot-btn'
          >
            submit
          </LoadingButton>
        </form>
      </div>
    </Wrapper>
  );
}

export default ForgotPassword;
