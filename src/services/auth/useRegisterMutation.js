import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/auth.js';
import { toast } from '@/components/ui/use-toast.js';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@/router/globalRoutes/routerPaths.js';

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast({
        title: 'You are registered',
      });
      navigate(RouterPaths.DASHBOARD);
    },
    onError: (data) => {
      console.log(data);
      toast({
        variant: "destructive",
        title: data.response?.data?.message,
      });
    }
  });

  return mutation;
};
