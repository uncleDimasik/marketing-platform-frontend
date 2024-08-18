import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { RouterPaths } from './routerPaths.js';
import { ProtectedRoute } from '../ProtectedRoutes.jsx';
import DashboardPage from '../../pages/DashboardPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage.jsx';
import AuthPage from '../../pages/AuthPage.jsx';
import { LoginFormView } from '@/views/LoginFormView.jsx';
import { RegistrationFormView } from '@/views/RegistrationFormView.jsx';
import { HeaderView } from '@/views/HeaderView.jsx';

const GlobalRoutes = () => {
  const routes = [
    {
      path: RouterPaths.DASHBOARD,
      element: (
        <ProtectedRoute>
          <HeaderView />
          <DashboardPage />
        </ProtectedRoute>
      ),
      errorElement: <NotFoundPage />,
    },
    {
      path: RouterPaths.AUTH,
      element: <AuthPage children={<Outlet />} />,
      children: [
        {
          index: true,
          element: <Navigate to={RouterPaths.LOGIN} replace />,
        },
        {
          path: RouterPaths.LOGIN,
          element: <LoginFormView />,
        },
        {
          path: RouterPaths.REGISTER,
          element: <RegistrationFormView />,
        },
      ],
    },
    {
      path: '/',
      element: <Navigate to={RouterPaths.DASHBOARD} replace />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];

  return useRoutes(routes);
};

export default GlobalRoutes;
