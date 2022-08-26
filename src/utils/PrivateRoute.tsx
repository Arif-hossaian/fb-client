/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes: FC<any> = () => {
  const { auth } = useSelector((state: any) => state);
  return auth?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
