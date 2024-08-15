import axios from 'axios';
import {
  ACCESS_TOKEN,
  API_BASE_URL,
  API_ENDPOINTS,
  API_RESOURCES,
  API_STATUSES,
  createApiUrl,
} from '@/api/constants.js';
import { logoutUser, refreshAccessToken } from '@/api/auth.js';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

axiosClient.defaults.headers.common['Content-Type'] =
  'application/json';

// const refreshTokenUrl = `${API_BASE_URL}${createApiUrl(API_RESOURCES.AUTH, API_ENDPOINTS.REFRESH_TOKEN)}`;

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errStatus = error.response.status;
    console.log(originalRequest);
    if (
      errStatus === API_STATUSES.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await refreshAccessToken();
        console.log('dddddddddd');
        console.log(res);
        localStorage.setItem(ACCESS_TOKEN, res.accessToken);
        return axiosClient.request(originalRequest);
      } catch (e) {
        console.log('Unauthorized');
      }
      return axiosClient(originalRequest);
    }
    return Promise.reject(error);
  },
);

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  return config;
});
