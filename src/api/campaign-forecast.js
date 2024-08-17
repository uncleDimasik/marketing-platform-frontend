import { axiosClient } from '@/api/axios-config.js';
import { API_ENDPOINTS, API_RESOURCES, createApiUrl } from '@/api/constants.js';

export const campaignForecast = async (campaign) => {
  const response = await axiosClient.post(
    createApiUrl(API_RESOURCES.STATISTICS, API_ENDPOINTS.FORECAST),
    campaign,
  );
  return response.data;
};
