import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import useQuery from '../../hooks/useQuery/useQuery';
import { toast } from 'react-toastify';

function ResetPassword() {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const query = useQuery();
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const oobCode = query.get('oobCode');

    if (!password) {
      return toast.error('Please enter a new password');
    }

    if (!oobCode) {
      return navigate('/');
    }

    resetPassword(oobCode, password)
      .then((res) => {
        toast.success('Password changed successfully, login to continue');
        navigate('/login');
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  useEffect(() => {
    document.title = 'Swift Cart | Reset Password';
  }, []);

  return (
    <Wrapper className='sc h-[calc(100vh-19rem)] flex items-center justify-center'>
      <div>
        <div className='title'>
          <h2>Reset Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='form-control'>
            <input
              type='password'
              className='input'
              placeholder='new password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* end email */}
          <button type='submit' className='btn reset-btn'>
            Reset
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default ResetPassword;
