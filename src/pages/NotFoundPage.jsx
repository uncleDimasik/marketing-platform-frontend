import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card className='max-w-sm w-full bg-slate-800 shadow-lg rounded-lg'>
        <CardHeader>
          <CardTitle className='text-center text-2xl font-bold'>404</CardTitle>
        </CardHeader>
        <CardContent className='p-6 text-center'>
          <p className='text-lg mb-4'>Oops! The page you’re looking for doesn’t exist.</p>
          <Button onClick={() => navigate('/')} className='w-full' variant='link'>
            Go to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
