import { ROUTES } from '@libs/router/data';
import { Navigate } from 'react-router-dom';
// import { Backdrop, CircularProgress } from '@mui/material';

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = window.sessionStorage.getItem('user');

  const isAuth = !!user;

  if (!isAuth) {
    return <Navigate to={ROUTES.LANDING.path} replace />;
  }

  return <>{children}</>;
};

export default AuthProvider;
