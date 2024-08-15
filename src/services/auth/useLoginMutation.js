import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser } from '@/api/auth.js';
import { ACCESS_TOKEN } from '@/api/constants.js';
import { toast } from '@/components/ui/use-toast.js';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@/router/globalRoutes/paths.js';

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast({
        title: 'You are logged in',
      });
      navigate(Paths.DASHBOARD);
    },
  });

  return mutation;
};
