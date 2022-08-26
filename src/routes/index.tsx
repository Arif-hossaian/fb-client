import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/404/PageNotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { refreshToken } from '../redux/actions/authAction';
import { AppDispatch } from '../redux/store';
import ProtectedRoute from '../utils/PrivateRoute';
import ScrollToTop from './ScrollToTop';

const AppRoutes: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};
export default AppRoutes;
