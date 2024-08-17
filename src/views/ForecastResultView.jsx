import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DollarSign, MousePointerClick, TrendingUp, Users } from 'lucide-react';

export function ForecastResultView({ data }) {
  return (
    <Card className='mt-6 bg-accent text-white shadow-lg rounded-lg'>
      <CardHeader>
        <CardTitle className='text-center text-2xl font-semibold'>
          Forecast Result
        </CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-4'>
        <MetricCard
          icon={<TrendingUp className='text-green-400 w-6 h-6' />}
          label='Predicted Impressions'
          value={data.predictedImpressions}
          bgColor='bg-slate-900'
        />
        <MetricCard
          icon={<MousePointerClick className='text-blue-400 w-6 h-6' />}
          label='Predicted Clicks'
          value={data.predictedClicks}
          bgColor='bg-slate-900'
        />
        <MetricCard
          icon={<Users className='text-purple-400 w-6 h-6' />}
          label='Predicted Unique Users'
          value={data.predictedUniqueUsers}
          bgColor='bg-slate-900'
        />
        <MetricCard
          icon={<DollarSign className='text-yellow-400 w-6 h-6' />}
          label='Recommended Bid'
          value={parseFloat(data.recommendedBid.toFixed(2))}
          bgColor='bg-slate-900'
        />
      </CardContent>
    </Card>
  );
}

function MetricCard({ icon, label, value, bgColor }) {
  return (
    <div
      className={cn(
        'flex items-center p-4 rounded-md',
        bgColor,
      )}
    >
      <div className='p-2 rounded-full bg-gray-800 mr-4'>
        {icon}
      </div>
      <div>
        <p className='text-sm text-gray-400'>{label}</p>
        <p className='text-xl font-bold'>{value}</p>
      </div>
    </div>
  );
}


