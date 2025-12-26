import { fetchWithSchema } from '../../lib/apiClient';
import { CurrentUserProfile } from '../../features/user/schemas';

export const userQueries = {
  all: () => ({
    queryKey: ['user'] as const,
  }),

  profile: () => ({
    queryKey: [...userQueries.all().queryKey, 'profile'] as const,
    queryFn: () =>
      fetchWithSchema(CurrentUserProfile, {
        url: '/me',
      }),
  }),
};
