import * as z from 'zod';

// External URLs schema
const ExternalUrlsSchema = z.object({
  spotify: z.url(),
});

// Image schema
const ImageSchema = z.object({
  url: z.url(),
  height: z.number().int().optional(),
  width: z.number().int().optional(),
});

// Artist schema
export const ArtistSchema = z.object({
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  name: z.string(),
  type: z.literal('artist'),
  uri: z.string(),
});

// Album schema
export const AlbumSchema = z.object({
  album_type: z.enum(['album', 'single', 'compilation']),
  total_tracks: z.number().int(),
  available_markets: z.array(z.string()),
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  images: z.array(ImageSchema),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.enum(['year', 'month', 'day']),
  restrictions: z
    .object({
      reason: z.string(),
    })
    .optional(),
  type: z.literal('album'),
  uri: z.string(),
  artists: z.array(ArtistSchema),
});

// Track schema
export const TrackSchema = z.object({
  album: AlbumSchema,
  artists: z.array(ArtistSchema),
  available_markets: z.array(z.string()),
  disc_number: z.number().int(),
  duration_ms: z.number().int(),
  explicit: z.boolean(),
  external_ids: z.object({
    isrc: z.string().optional(),
    ean: z.string().optional(),
    upc: z.string().optional(),
  }),
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  is_playable: z.boolean().optional(),
  linked_from: z.record(z.string(), z.any()).optional(),
  restrictions: z
    .object({
      reason: z.string(),
    })
    .optional(),
  name: z.string(),
  popularity: z.number().int().min(0).max(100),
  preview_url: z.url().nullable(),
  track_number: z.number().int(),
  type: z.literal('track'),
  uri: z.string(),
  is_local: z.boolean(),
});

// User reference schema (minimal user fields used in item metadata)
const UserRefSchema = z.object({
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  type: z.literal('user'),
  uri: z.string(),
});

// Playlist Item (Track in playlist with metadata)
export const PlaylistItemSchema = z.object({
  added_at: z.iso.datetime(),
  added_by: UserRefSchema,
  is_local: z.boolean(),
  track: TrackSchema,
});

// Paging object for playlist items (Get Playlist Items response)
export const PagingTracksSchema = z.object({
  href: z.url(),
  limit: z.number().int(),
  next: z.url().nullable(),
  offset: z.number().int(),
  previous: z.url().nullable(),
  total: z.number().int(),
  items: z.array(PlaylistItemSchema),
});

// Owner schema (extends minimal user reference with display_name)
const OwnerSchema = UserRefSchema.extend({
  display_name: z.string(),
});

// Main Playlist schema
export const PlaylistSchema = z.object({
  collaborative: z.boolean(),
  description: z.string().nullable(),
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  images: z.array(ImageSchema),
  name: z.string(),
  owner: OwnerSchema,
  public: z.boolean(),
  snapshot_id: z.string(),
  tracks: PagingTracksSchema,
  type: z.literal('playlist'),
  uri: z.string(),
});

// Simplified tracks reference (used in simplified playlist objects)
const TracksRefSchema = z.object({
  href: z.url(),
  total: z.number().int(),
});

// Simplified Playlist schema (as returned by GET /me/playlists)
export const SimplifiedPlaylistSchema = z.object({
  collaborative: z.boolean(),
  description: z.string().nullable(),
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  images: z.array(ImageSchema),
  name: z.string(),
  owner: OwnerSchema,
  public: z.boolean(),
  snapshot_id: z.string(),
  tracks: TracksRefSchema,
  type: z.literal('playlist'),
  uri: z.string(),
});

// Paging object for current user's playlists
export const PagingPlaylistsSchema = z.object({
  href: z.url(),
  limit: z.number().int(),
  next: z.url().nullable(),
  offset: z.number().int(),
  previous: z.url().nullable(),
  total: z.number().int(),
  items: z.array(SimplifiedPlaylistSchema),
});

// Featured Playlists response
export const FeaturedPlaylistsResponseSchema = z.object({
  message: z.string(),
  playlists: PagingPlaylistsSchema,
});

// Export types
