import {
  useQuery,
} from '@tanstack/react-query';
import {
  API_ENDPOINTS,
  API_RESOURCES,
  createApiUrl,
} from '@/api/constants.js';
import { whoAmI } from '@/api/user.js';

export const useWhoAmIQuery = () => {
  const { data, status, isLoading } = useQuery({
    queryKey: [
      `${createApiUrl(API_RESOURCES.USER, API_ENDPOINTS.WHO_AM_I)}`,
    ],
    queryFn: whoAmI,
  });
  return { data, isLoading, status };
};
