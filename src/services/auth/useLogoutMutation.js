import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '@/api/auth.js';
import { toast } from '@/components/ui/use-toast.js';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@/router/globalRoutes/routerPaths.js';
import { ACCESS_TOKEN } from '@/api/constants.js';

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: (data) => {
      toast({
        title: 'You are logged out',
      });
      localStorage.removeItem(ACCESS_TOKEN);
      navigate(RouterPaths.AUTH);
    },
  });

  return mutation;
};
