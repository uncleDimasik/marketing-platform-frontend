import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useCampaignForecastMutation } from '@/services/statistics/useCampaignForecastMutation.js';

const FormSchema = z.object({
  bannerSize: z.enum(['300x250', '728x90', '160x600', '468x60'], {
    message: 'Please choose an option from the list.',
  }),
  category: z.enum(['Technology', 'Health', 'Finance', 'Education', 'Entertainment'], {
    message: 'Please choose an option from the list.',
  }),
  budget: z
    .coerce
    .number({ message: 'Budget must be a number.' })
    .min(10, { message: 'Minimum budget is $10.' })
    .max(10000, { message: 'Maximum budget is $10,000.' }),
});

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

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <div className='flex justify-center items-center p-6'>
      <div className=' shadow-lg rounded-lg p-8 max-w-md w-full'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Campaign Forecast</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {/* Banner Size Field */}
            <FormField
              control={form.control}
              name='bannerSize'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banner Size</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder='Select Banner Size' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='300x250'>300x250</SelectItem>
                        <SelectItem value='728x90'>728x90</SelectItem>
                        <SelectItem value='160x600'>160x600</SelectItem>
                        <SelectItem value='468x60'>468x60</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category Field */}
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder='Select Category' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Technology'>Technology</SelectItem>
                        <SelectItem value='Health'>Health</SelectItem>
                        <SelectItem value='Finance'>Finance</SelectItem>
                        <SelectItem value='Education'>Education</SelectItem>
                        <SelectItem value='Entertainment'>Entertainment</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Budget Field */}
            <FormField
              control={form.control}
              name='budget'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter Budget' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' className='w-full' isLoading={isPending}>
              Submit
            </Button>
          </form>
        </Form>

        {data && (
          <div className='mt-6 p-4 bg-secondary rounded-lg'>
            <h2 className='text-lg font-medium mb-2'>Forecast Result</h2>
            <pre className='text-sm'>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}

        {error && <div className='mt-6 text-red-600'>Error: {error.message}</div>}
      </div>
    </div>
  );
}
