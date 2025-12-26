import { fetchWithSchema } from '../../lib/apiClient';
import { CurrentUserProfile } from '../../features/user/schemas';
import { queryOptions } from '@tanstack/react-query';

export const userQueries = {
  all: () =>
    queryOptions({
      queryKey: ['user'] as const,
    }),

  profile: () =>
    queryOptions({
      queryKey: [...userQueries.all().queryKey, 'profile'] as const,
      queryFn: () =>
        fetchWithSchema(CurrentUserProfile, {
          url: '/me',
        }),
    }),
};
