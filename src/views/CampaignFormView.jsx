import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useCampaignForecastMutation } from '@/services/statistics/useCampaignForecastMutation.js';
import { ForecastResultView } from '@/views/ForecastResultView.jsx';
import { ForecastSkeletonView } from '@/views/ForecastSkeletonView.jsx';
import { FormFieldSelect } from '@/components/FormFieldSelect.jsx';
import { FormFieldInput } from '@/components/FormFieldInput.jsx';
import { WrapperView } from '@/views/WrapperView.jsx';

// Form validation schema using Zod
const FormSchema = z.object({
  bannerSize: z.enum(['300x250', '728x90', '160x600', '468x60'], {
    message: 'Please choose an option from the list.',
  }),
  category: z.enum(['Technology', 'Health', 'Finance', 'Education', 'Entertainment'], {
    message: 'Please choose an option from the list.',
  }),
  budget: z.coerce
    .number({ message: 'Budget must be a number.' })
    .min(10, { message: 'Minimum budget is $10.' })
    .max(10000, { message: 'Maximum budget is $10,000.' }),
});

// Form Component
export function CampaignFormView() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bannerSize: '',
      category: '',
      budget: 10,
    },
  });

  const { mutate, isPending, data, error } = useCampaignForecastMutation();

  // Submit handler
  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <WrapperView>
      <h2 className='text-2xl font-semibold mb-6 text-center'>Campaign Forecast</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormFieldSelect
            control={form.control}
            name='bannerSize'
            label='Banner Size'
            placeholder='Select Banner Size'
            options={[
              { value: '300x250', label: '300x250' },
              { value: '728x90', label: '728x90' },
              { value: '160x600', label: '160x600' },
              { value: '468x60', label: '468x60' },
            ]}
          />

          <FormFieldSelect
            control={form.control}
            name='category'
            label='Category'
            placeholder='Select Category'
            options={[
              { value: 'Technology', label: 'Technology' },
              { value: 'Health', label: 'Health' },
              { value: 'Finance', label: 'Finance' },
              { value: 'Education', label: 'Education' },
              { value: 'Entertainment', label: 'Entertainment' },
            ]}
          />

          <FormFieldInput
            control={form.control}
            name='budget'
            label='Budget'
            placeholder='Enter Budget'
          />

          <Button type='submit' className='w-full' isLoading={isPending}>
            Forecast
          </Button>
        </form>
      </Form>

      {isPending && <ForecastSkeletonView />}
      {data && <ForecastResultView data={data} />}
      {error && <div className='mt-6 text-red-600'>Error: {error.message}</div>}
    </WrapperView>
  );
}
