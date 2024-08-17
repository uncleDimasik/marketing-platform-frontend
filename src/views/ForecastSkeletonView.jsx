import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function ForecastSkeletonView() {
  return (
    <Card className='mt-6 bg-accent text-white shadow-lg rounded-lg'>
      <CardHeader>
        <CardTitle className='text-center text-2xl font-semibold'>
          <div className="h-6 bg-gray-700 rounded animate-pulse mx-auto w-48"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-4'>
        <SkeletonMetricCard bgColor='bg-slate-900' />
        <SkeletonMetricCard bgColor='bg-slate-900' />
        <SkeletonMetricCard bgColor='bg-slate-900' />
        <SkeletonMetricCard bgColor='bg-slate-900' />
      </CardContent>
    </Card>
  );
}

function SkeletonMetricCard({ bgColor }) {
  return (
    <div
      className={cn(
        'flex items-center p-4 rounded-md',
        bgColor,
      )}
    >
      <div className='p-2 rounded-full bg-gray-800 mr-4'>
        <div className="w-6 h-6 bg-gray-600 rounded-full animate-pulse"></div>
      </div>
      <div className='flex-1'>
        <div className='h-4 bg-gray-600 rounded animate-pulse mb-2 w-32'></div>
        <div className='h-6 bg-gray-700 rounded animate-pulse w-24'></div>
      </div>
    </div>
  );
}
