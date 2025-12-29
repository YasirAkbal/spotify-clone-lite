import { fetchWithSchema } from '../../lib/apiClient';
import { queryOptions } from '@tanstack/react-query';
import {
  PlaylistSchema,
  PagingTracksSchema,
  PagingPlaylistsSchema,
  FeaturedPlaylistsResponseSchema,
} from '../../features/playlists/schemas';

export const playlistQueries = {
  all: () =>
    queryOptions({
      queryKey: ['playlists'] as const,
    }),
  getPlaylist: (playlistId: number) =>
    queryOptions({
      queryKey: [...playlistQueries.all().queryKey, playlistId] as const,
      queryFn: () => getPlaylist(playlistId),
    }),
  getPlaylistItems: (playlistId: number, offset = 0, limit = 20) =>
    queryOptions({
      queryKey: [
        ...playlistQueries.all().queryKey,
        playlistId,
        'items',
        { offset, limit },
      ] as const,
      queryFn: () => getPlaylistItems(playlistId, offset, limit),
    }),
  getCurrentUsersPlaylist: (offset = 0, limit = 20) =>
    queryOptions({
      queryKey: [...playlistQueries.all().queryKey, 'me', { offset, limit }] as const,
      queryFn: () => getCurrentUsersPlaylist(offset, limit),
    }),
  getFeaturedPlaylists: (offset = 0, limit = 20) =>
    queryOptions({
      queryKey: [...playlistQueries.all().queryKey, 'featured', { offset, limit }] as const,
      queryFn: () => getFeaturedPlaylists(offset, limit),
    }),
};

function getPlaylist(playlistId: number) {
  return fetchWithSchema(PlaylistSchema, {
    url: `playlists`,
    params: { playlistId },
  });
}

function getPlaylistItems(playlistId: number, offset = 0, limit = 20) {
  return fetchWithSchema(PagingTracksSchema, {
    url: `playlists/${playlistId}/tracks`,
    params: { offset, limit },
  });
}

function getCurrentUsersPlaylist(offset = 0, limit = 20) {
  return fetchWithSchema(PagingPlaylistsSchema, {
    url: 'me/playlists',
    params: { offset, limit },
  });
}

function getFeaturedPlaylists(offset = 0, limit = 20) {
  return fetchWithSchema(FeaturedPlaylistsResponseSchema, {
    url: 'browse/featured-playlists',
    params: { offset, limit },
  });
}
