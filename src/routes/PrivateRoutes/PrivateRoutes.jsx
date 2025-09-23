import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import useUserRole from '../../hooks/useUserRole/useUserRole';
import Loader from '../../components/Shared/Loader/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
  const { user, loading } = useAuth()
  const { role, isLoading } = useUserRole()
  const location = useLocation()

  if (loading || isLoading){
    return <Loader></Loader>
  }

  if (!user || !user?.email){
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  
  return children
}

export default PrivateRoutes