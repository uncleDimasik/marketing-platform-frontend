import axios from 'axios';
import { ACCESS_TOKEN, API_BASE_URL, API_STATUSES } from '@/api/constants.js';
import { refreshAccessToken } from '@/api/auth.js';

export const auth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

auth.defaults.headers.common['Content-Type'] = 'application/json';

auth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errStatus = error.response.status;

    if (
      errStatus === API_STATUSES.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const res = await refreshAccessToken();
      localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
      return auth(originalRequest);
    }
    return Promise.reject(error);
  },
);
// auth.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
//   return config;
// })