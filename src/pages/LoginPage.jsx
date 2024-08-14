import { AuthFormView } from '@/views/AuthFormView.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';

export default function LoginPage() {
  return (
    <div className={'flex items-center justify-center mt-auto'}>
      <AuthFormView />
      <Toaster />
    </div>
  );
}
