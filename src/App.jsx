import GlobalRoutes from './router/globalRoutes/GlobalRoutes.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/toaster.jsx';
import { ErrorFallbackView } from '@/views/ErrorFallbackView.jsx';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ErrorBoundary FallbackComponent={ErrorFallbackView}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <GlobalRoutes />
            <Toaster />
          </BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
