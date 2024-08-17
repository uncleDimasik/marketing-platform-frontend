import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button.jsx';
import { Form } from '@/components/ui/form.jsx';
import { useIsMutating } from '@tanstack/react-query';
import { FormFieldInput } from '@/components/FormFieldInput.jsx';
import React from 'react';

export function AuthForm({ formSchema, defaultValues, onSubmit, isRegistration, error }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const isMutating = useIsMutating();

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-md p-8 space-y-8  rounded-lg shadow-lg'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormFieldInput
              control={form.control}
              name='email'
              label='Email'
              placeholder='Enter your email'
            />

            <FormFieldInput
              control={form.control}
              name='password'
              label='Password'
              type='password'
              placeholder='Enter your password'
            />

            {isRegistration && (
              <FormFieldInput
                control={form.control}
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                placeholder='Confirm your password'
              />
            )}
            {error && <div className='mt-6 text-red-600'>Error: {error?.response?.data?.message}</div>}
            <Button type='submit' className='w-full' isLoading={isMutating}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
