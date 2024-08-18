import { Link, useLocation } from 'react-router-dom';
import { RouterPaths } from '@/router/globalRoutes/routerPaths.js';
import { Button } from '@/components/ui/button.jsx';
import { WrapperView } from '@/views/WrapperView.jsx';

export default function AuthPage({ children }) {
  const { pathname } = useLocation();
  const isLogin = pathname.includes(RouterPaths.LOGIN);

  return (
    <WrapperView>
      <h2 className='text-2xl font-semibold mb-6 text-center'>
        {isLogin ? 'Login' : 'Registration'}
      </h2>
      {children}
      {isLogin ? (
        <Button className='w-full' variant={'link'}>
          <Link to={`${RouterPaths.REGISTER}`}>Register</Link>
        </Button>
      ) : (
        <Button className='w-full' variant={'link'}>
          <Link to={`${RouterPaths.LOGIN}`}>Login</Link>
        </Button>
      )}
    </WrapperView>
  );
}
