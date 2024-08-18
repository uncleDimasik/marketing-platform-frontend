import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouterPaths } from '@/router/globalRoutes/routerPaths.js';
import { ACCESS_TOKEN } from '@/api/constants.js';

export function RootRoute() {
  const token = localStorage.getItem(ACCESS_TOKEN);

  if (!token) {
    return (<Navigate to={RouterPaths.AUTH} replace />);
  }


  return (<Navigate to={RouterPaths.DASHBOARD} replace />);

}

