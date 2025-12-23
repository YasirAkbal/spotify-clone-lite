import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import './input.css';
import App from './App.tsx';
import { queryClient } from './app/queryClient.ts';
import { QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/layout/Fallback.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={Fallback}>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Provider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  </StrictMode>
);
