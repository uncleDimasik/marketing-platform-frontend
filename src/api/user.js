import {
  ACCESS_TOKEN,
  API_ENDPOINTS,
  API_RESOURCES,
  API_STATUSES,
  createApiUrl,
} from '@/api/constants.js';
import { axiosClient } from '@/api/config.js';

export const getUsers = async () => {
  const response = await axiosClient.get(
    createApiUrl(API_RESOURCES.USER, API_ENDPOINTS.USERS),
  );
  return response.data;
};

export const whoAmI = async () => {
  const response = await axiosClient.get(
    createApiUrl(API_RESOURCES.USER, API_ENDPOINTS.WHO_AM_I),
  );
  return response.data;
};
