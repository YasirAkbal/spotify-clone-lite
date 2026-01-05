import { QueryClient, QueryCache } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: (_error, query) => {
        //if there isn't any data to show user, fallback to ErrorComponent
        return typeof query.state.data === 'undefined';
      },
    },
  },

  queryCache: new QueryCache({
    onError: (error, query) => {
      if (typeof query.state.data !== 'undefined') {
        //toast notification
        toast.error(error.message);
      }
    },
  }),
});
