import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/auth.js';
import { toast } from '@/components/ui/use-toast.js';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@/router/globalRoutes/routerPaths.js';
import { ACCESS_TOKEN } from '@/api/constants.js';

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast({
        title: 'You are logged in',
      });
      localStorage.setItem(ACCESS_TOKEN, data.accessToken);
      navigate(RouterPaths.DASHBOARD);
    },
    onError: (data) => {
      console.log(data);
      toast({
        variant: 'destructive',
        title: data.response?.data?.message,
      });
    },
  });

  return mutation;
};
