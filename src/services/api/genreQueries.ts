import { queryOptions } from '@tanstack/react-query';
import { GenresResponseSchema, GenreSchema } from '../../features/search/schemas';
import { fetchMockApi } from '../../lib/mockApiClient';

export const genreQueries = {
  all: () =>
    queryOptions({
      queryKey: ['genres'] as const,
    }),
  getGenres: (offset = 0, limit = 30) =>
    queryOptions({
      queryKey: [...genreQueries.all().queryKey, { offset, limit }] as const,
      queryFn: () => getGenres(offset, limit),
    }),
  getGenre: (genreId: string) =>
    queryOptions({
      queryKey: [...genreQueries.all().queryKey, genreId] as const,
      queryFn: () => getGenre(genreId),
    }),
};

function getGenres(offset = 0, limit = 30) {
  return fetchMockApi(GenresResponseSchema, {
    url: '/api/genres',
    params: { offset, limit },
  });
}

function getGenre(genreId: string) {
  return fetchMockApi(GenreSchema, {
    url: `/api/genres/${genreId}`,
  });
}
