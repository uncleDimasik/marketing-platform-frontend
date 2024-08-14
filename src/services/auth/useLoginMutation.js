import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser } from '@/api/auth.js';
import { ACCESS_TOKEN } from '@/api/constants.js';
import { toast } from '@/components/ui/use-toast.js';

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData([ACCESS_TOKEN], data.accessToken);
      toast({
        title: 'You are logged in',
      });
    },
  });

  return mutation;
};
