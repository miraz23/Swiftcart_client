import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import useUserRole from '../../hooks/useUserRole/useUserRole';
import Loader from '../../components/shared/Loader/Loader';
import { Navigate } from 'react-router';

const PatientRoutes = ({children}) => {
  const { user, loading } = useAuth()
  const { role, isLoading } = useUserRole()

  if (loading || isLoading){
    return <Loader></Loader>
  }

  if (!user || role !== "patient"){
    return <Navigate to="/forbidden" state={location.pathname}></Navigate>
  }

  return children
}

export default PatientRoutes