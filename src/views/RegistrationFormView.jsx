import { z } from 'zod';
import { AuthForm } from '@/components/AuthForm.jsx';
import { useRegisterMutation } from '@/services/auth/useRegisterMutation.js';

const registrationSchema = z
  .object({
    email: z
      .string()
      .min(4, { message: 'This field has to be filled.' })
      .email('This is not a valid email.'),
    password: z.string().min(8, { message: 'At least 8 characters' }).max(16, { message: 'Max 16 characters' }),
    confirmPassword: z.string().min(8, { message: 'At least 8 characters' }).max(16, { message: 'Max 16 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match',
    path: ['confirmPassword'],
  });

export function RegistrationFormView() {
  const { mutate, error } = useRegisterMutation();

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <AuthForm
      formSchema={registrationSchema}
      defaultValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={onSubmit}
      isRegistration={true}
    />
  );
}
