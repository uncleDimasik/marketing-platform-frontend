import { Navigate, useLocation } from 'react-router-dom';
import { useCheckAuthQuery } from '@/services/auth/useCheckAuthQuery.js';
import { RouterPaths } from '@/router/globalRoutes/routerPaths.js';
import { LoadingIndicatorView } from '@/views/LoadingIndicatorView.jsx';

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { status } = useCheckAuthQuery();

  if (status === 'pending') {
    return <LoadingIndicatorView />;
  }

  if (status !== 'success') {
    return <Navigate to={RouterPaths.AUTH} replace state={{ from: location }} />;
  }

  return <>{children}</>;
};
