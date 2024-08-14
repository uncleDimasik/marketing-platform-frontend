import { ACCESS_TOKEN, API_ENDPOINTS, API_RESOURCES, API_STATUSES, createApiUrl } from '@/api/constants.js';
import { auth } from '@/api/config.js';

export const refreshAccessToken = async () => {
  const response = await auth.get(
    createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.REFRESH_TOKEN),
  );
  return response.data;
};

export const registerUser = async (user) => {
  const response = await auth.post(
    createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.REGISTER),
    user,
  );
  return response.data;
};

export const loginUser = async (user) => {
  const response = await auth.post(
    createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.LOGIN),
    user,
  );
  return response.data;
};

export const logoutUser = async () => {
  const response = await auth.get(
    createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.LOGOUT),
  );
  return response.data;
};
