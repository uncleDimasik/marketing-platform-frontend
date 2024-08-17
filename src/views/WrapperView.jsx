import React from 'react';

export function WrapperView({ children } ) {
  return (
    <div className='flex justify-center items-center p-6'>
      <div className='shadow-lg rounded-lg p-8 max-w-md w-full'>
        {children}
      </div>
    </div>
  );
}

