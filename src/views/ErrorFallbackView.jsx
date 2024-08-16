import { Button } from '@/components/ui/button.jsx';

export function ErrorFallbackView({ error, resetErrorBoundary }) {
  const handleRedirect = () => {
    window.location.href = '/'; // Redirects to the homepage
  };

  return (
    <div role='alert' className='p-6 bg-red-500 rounded-md shadow-md bg-popover'>
      <h2 className='text-2xl font-semibold'>Oops! Something went wrong.</h2>
      <p className='mt-2'>{error.message}</p>
      <div className='mt-4 space-x-4'>
        <Button onClick={resetErrorBoundary}>Retry</Button>
        <Button onClick={handleRedirect}>Go to Homepage</Button>
      </div>
    </div>
  );
}
