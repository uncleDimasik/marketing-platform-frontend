import { Link, useLocation } from 'react-router-dom';
import { RouterPaths } from '@/router/globalRoutes/routerPaths.js';
import { Button } from '@/components/ui/button.jsx';

export default function AuthPage({ children }) {
  const { pathname } = useLocation();
  const isLogin = pathname.includes(RouterPaths.LOGIN);

  return (
    <div className={' min-h-screen flex flex-col items-center justify-center '}>
      <h1 className='flex mt-2.5 text-2xl font-semibold'>{isLogin ? 'Login' : 'Registration'}</h1>
      {children}
      {isLogin ? (
        <Button variant={'link'}>
          <Link to={`${RouterPaths.REGISTER}`}>Register</Link>
        </Button>
      ) : (
        <Button variant={'link'}>
          <Link to={`${RouterPaths.LOGIN}`}>Login</Link>
        </Button>
      )}
    </div>
  );
}
