import { ACCESS_TOKEN, API_BASE_URL, API_ENDPOINTS, API_RESOURCES, createApiUrl } from '@/api/constants.js';
import { axiosClient } from '@/api/axios-config.js';
import axios from 'axios';

export const refreshAccessToken = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/${createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.REFRESH_TOKEN)}`,
    {
      withCredentials: true,
    },

  );
  return response.data;
};

export const registerUser = async (user) => {
  const response = await axiosClient.post(
    createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.REGISTRATION),
    user,
  );return response.data;};

export const loginUser = async (user) => {
  const response = await axiosClient.post(
    createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.LOGIN),
    user,
  );
  return response.data;
};

export const logoutUser = async () => {
  const response = await axiosClient.post(createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.LOGOUT));
  return response.data;
};


