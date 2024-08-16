import { Link, useLocation } from 'react-router-dom';
import { Paths } from '@/router/globalRoutes/paths.js';

export default function AuthPage({ children }) {
  const { pathname } = useLocation();
  const isLogin = pathname.includes(Paths.LOGIN);

  return (
    <div className={' min-h-screen flex flex-col items-center justify-center '}>
      <h1 className='flex mt-2.5 text-2xl font-semibold'>{isLogin ? 'Login' : 'Registration'}</h1>
      {children}

      {isLogin ? (
        <Link to={`${Paths.REGISTER}`}>Register</Link>
      ) : (
        <Link to={`${Paths.LOGIN}`}>Login</Link>
      )}
    </div>
  );
}
