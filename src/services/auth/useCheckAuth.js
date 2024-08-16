import { useQuery } from '@tanstack/react-query';
import { refreshAccessToken } from '@/api/auth.js';

export const useCheckAuth = () => {
  const { data, status, isLoading } = useQuery({
    queryKey: ['checkAuth'],
    queryFn: refreshAccessToken,
  });
  return { data, isLoading, status };
};
