import { Navigate, useLocation } from 'react-router-dom';
import { Paths } from './globalRoutes/paths.js';
import { useCheckAuth } from '@/services/auth/useCheckAuth.js';

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const { data, isLoading, status } = useCheckAuth();

  if (isLoading) return <>loading...</>;

  return data && !isLoading && status === 'success' ? (
    <>{children}</>
  ) : (
    <Navigate to={Paths.LOGIN} replace state={{ from: location }} />
  );
};
