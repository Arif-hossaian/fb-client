/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes: FC<any> = () => {
  const { auth } = useSelector((state: any) => state);
  return auth?.access_token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
