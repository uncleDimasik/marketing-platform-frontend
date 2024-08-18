import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx';
import { Loader2 } from 'lucide-react';

export const LoadingIndicatorView = () => {
  return (
    <Card className='mx-auto mt-16 p-6 flex flex-col items-center'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold'>Checking Authentication...</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center space-y-4'>
        <Loader2 className='w-12 h-12 animate-spin' /> {/* Adjust size and color as needed */}
        <CardDescription className='text-gray-600'>
          Please wait while we trying verify your access.
        </CardDescription>
      </CardContent>
    </Card>
  );
};
