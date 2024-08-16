import { useMutation } from '@tanstack/react-query';
import { campaignForecast } from '@/api/campaign-forecast.js';
import { API_ENDPOINTS, API_RESOURCES, createApiUrl } from '@/api/constants.js';

export const useCampaignForecastMutation = () => {
  const mutation = useMutation({
    mutationKey: [createApiUrl(API_RESOURCES.STATISTICS, API_ENDPOINTS.FORECAST)],
    mutationFn: campaignForecast,
  });
  return mutation;
};
