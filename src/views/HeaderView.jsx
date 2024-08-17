import { useWhoAmIQuery } from '@/services/user/useWhoAmIQuery.js';
import { Button } from '@/components/ui/button.jsx';
import { useLogoutMutation } from '@/services/auth/useLogoutMutation.js';

export function HeaderView() {
  const { data } = useWhoAmIQuery();
  const { mutate, isPending } = useLogoutMutation();
  const onLogout = () => {
    mutate();
  };

  return (
    <header className='py-4 px-6 flex items-center justify-between'>
      <div className='text-lg font-semibold'>
        Welcome,&nbsp;
        {data && (<span className='text-blue-400'>{data.email}</span>)}
      </div>
      <Button variant='outline' size='sm' onClick={onLogout} isLoading={isPending}>
        Logout
      </Button>
    </header>
  );
}
