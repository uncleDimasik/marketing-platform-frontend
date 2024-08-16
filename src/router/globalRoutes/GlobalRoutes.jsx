import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { Paths } from './paths.js';
import { ProtectedRoute } from '../ProtectedRoutes.jsx';
import DashboardPage from '../../pages/DashboardPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage.jsx';
import AuthPage from '../../pages/AuthPage.jsx';
import { LoginFormView } from '@/views/LoginFormView.jsx';
import { RegistrationFormView } from '@/views/RegistrationFormView.jsx';

const GlobalRoutes = () => {
  const routes = [
    {
      path: Paths.DASHBOARD,
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
      errorElement: <NotFoundPage />,
      children: [
        //---------------------------------------------------------------
        // {
        //   index: true,
        //   path: Paths.ORDER,
        //   element: <OrderTable/>,
        // },
      ],
    },
    {
      path: Paths.AUTH,
      element: <AuthPage children={<Outlet />} />,
      children: [
        {
          index: true,
          element: <Navigate to={Paths.LOGIN} replace />,
        },
        {
          path: Paths.LOGIN,
          element: <LoginFormView />,
        },
        {
          path: Paths.REGISTER,
          element: <RegistrationFormView />,
        },
      ],
    },
    {
      path: '/',
      element: <Navigate to={Paths.DASHBOARD} replace />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];

  return useRoutes(routes);
};

export default GlobalRoutes;
