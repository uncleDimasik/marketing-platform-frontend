import { z } from 'zod';
import { useLoginMutation } from '@/services/auth/useLoginMutation.js';
import { AuthForm } from '@/components/AuthForm.jsx';

const loginSchema = z.object({
  email: z
    .string()
    .min(4, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z.string().min(8, { message: 'At least 8 characters' }).max(16, { message: 'Max 16 characters' }),
});

export function LoginFormView() {
  const loginMutation = useLoginMutation();

  const onSubmit = (formData) => {
    loginMutation.mutate(formData);
  };

  return (
    <AuthForm
      formSchema={loginSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
    />
  );
}
