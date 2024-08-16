import { z } from 'zod';
import { AuthForm } from '@/components/AuthForm.jsx';
import { useRegisterMutation } from '@/services/auth/useRegisterMutation.js';

const registrationSchema = z
  .object({
    email: z
      .string()
      .min(4, { message: 'This field has to be filled.' })
      .email('This is not a valid email.'),
    password: z.string().min(8, { message: 'At least 8 characters' }),
    confirmPassword: z.string().min(8, { message: 'At least 8 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export function RegistrationFormView() {
   const registerMutation = useRegisterMutation();

  const onSubmit = (formData) => {
    registerMutation.mutate(formData);
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
