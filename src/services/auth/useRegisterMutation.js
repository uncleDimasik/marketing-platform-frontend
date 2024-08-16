import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/auth.js';
import { toast } from '@/components/ui/use-toast.js';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@/router/globalRoutes/paths.js';

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast({
        title: 'You are registered',
      });
      navigate(Paths.DASHBOARD);
    },
  });

  return mutation;
};
