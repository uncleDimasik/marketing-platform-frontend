import { useQuery } from '@tanstack/react-query';
import { refreshAccessToken } from '@/api/auth.js';
import { ACCESS_TOKEN } from '@/api/constants.js';
import { toast } from '@/components/ui/use-toast.js';

export const useCheckAuthQuery = () => {
  const { data, status, isLoading } = useQuery({
    queryKey: ['checkAuth'],
    queryFn: async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);

      if (!token) {
        toast({
          variant: 'destructive',
          title: 'No access token found',
        });
        throw new Error('No access token found');
      }

      const response = await refreshAccessToken();

      localStorage.setItem(ACCESS_TOKEN, response.accessToken);

      return response;
    },
    retry: 1,
  });

  return { data, isLoading, status };
};
