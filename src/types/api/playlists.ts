import type { z } from 'zod';
import type {
  PlaylistSchema,
  PlaylistItemSchema,
  TrackSchema,
  AlbumSchema,
  ArtistSchema,
  PagingTracksSchema,
  SimplifiedPlaylistSchema,
  PagingPlaylistsSchema,
  FeaturedPlaylistsResponseSchema,
} from '../../features/playlists/schemas';

export type Playlist = z.infer<typeof PlaylistSchema>;
export type PlaylistItem = z.infer<typeof PlaylistItemSchema>;
export type Track = z.infer<typeof TrackSchema>;
export type Album = z.infer<typeof AlbumSchema>;
export type Artist = z.infer<typeof ArtistSchema>;
export type PlaylistItemsResponse = z.infer<typeof PagingTracksSchema>;
export type SimplifiedPlaylist = z.infer<typeof SimplifiedPlaylistSchema>;
export type CurrentUserPlaylistsResponse = z.infer<typeof PagingPlaylistsSchema>;
export type FeaturedPlaylistsResponse = z.infer<typeof FeaturedPlaylistsResponseSchema>;
