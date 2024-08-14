import { useRoutes} from "react-router-dom";
import {Paths} from "./paths.js";
import {ProtectedRoute} from "../ProtectedRoutes.jsx";
import DashboardPage from '../../pages/DashboardPage.jsx'
import NotFoundPage from "../../pages/NotFoundPage.jsx";
import LoginPage from "../../pages/LoginPage.jsx";

const GlobalRoutes= () => {
  const routes = [
    {
      path: Paths.DASHBOARD,
      element: (
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
      ),
      errorElement: <NotFoundPage/>,
      children: [
        //---------------------------------------------------------------
        // {
        //   index: true,
        //   path: Paths.ORDER,
        //   element: <OrderTable/>,
        // },
      ]
    },
    {
      index: true,
      path: Paths.LOGIN,
      element: <LoginPage/>,
    },
    {
      index: true,
      path: '*',
      element: (
          <NotFoundPage/>
      ),
    },
  ];

  return useRoutes(routes);
};

export default GlobalRoutes;
