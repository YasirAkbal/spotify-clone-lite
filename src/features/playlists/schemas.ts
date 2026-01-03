import * as z from 'zod';
import {
  ExternalUrlsSchema,
  ImageSchema,
  UserRefSchema,
  UserWithDisplayNameSchema,
  RestrictionsSchema,
  createPagingSchema,
} from '@/lib/schemas';

// ============================================
// Artist Schema
// ============================================
export const ArtistSchema = z.object({
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  name: z.string(),
  type: z.literal('artist'),
  uri: z.string(),
});

// ============================================
// Album Schema
// ============================================
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
  restrictions: RestrictionsSchema.optional(),
  type: z.literal('album'),
  uri: z.string(),
  artists: z.array(ArtistSchema),
});

// ============================================
// Track Schema
// ============================================
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
  restrictions: RestrictionsSchema.optional(),
  name: z.string(),
  popularity: z.number().int().min(0).max(100),
  preview_url: z.url().nullable(),
  track_number: z.number().int(),
  type: z.literal('track'),
  uri: z.string(),
  is_local: z.boolean(),
});

// ============================================
// Playlist Item (Track in playlist with metadata)
// ============================================
export const PlaylistItemSchema = z.object({
  added_at: z.iso.datetime(),
  added_by: UserRefSchema,
  is_local: z.boolean(),
  track: TrackSchema,
});

// ============================================
// Paging Schemas (using factory)
// ============================================
export const PagingTracksSchema = createPagingSchema(PlaylistItemSchema);

// ============================================
// Playlist Base Schema (shared fields)
// ============================================
const PlaylistBaseSchema = z.object({
  collaborative: z.boolean(),
  description: z.string().nullable(),
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  images: z.array(ImageSchema),
  name: z.string(),
  owner: UserWithDisplayNameSchema,
  public: z.boolean(),
  snapshot_id: z.string(),
  type: z.literal('playlist'),
  uri: z.string(),
});

// ============================================
// Full Playlist Schema (with full tracks paging)
// ============================================
export const PlaylistSchema = PlaylistBaseSchema.extend({
  tracks: PagingTracksSchema,
});

// ============================================
// Simplified Playlist Schema (with tracks reference only)
// ============================================
const TracksRefSchema = z.object({
  href: z.url(),
  total: z.number().int(),
});

export const SimplifiedPlaylistSchema = PlaylistBaseSchema.extend({
  tracks: TracksRefSchema,
});

// ============================================
// Paging Playlists Schema
// ============================================
export const PagingPlaylistsSchema = createPagingSchema(SimplifiedPlaylistSchema);

// ============================================
// Featured Playlists Response
// ============================================
export const FeaturedPlaylistsResponseSchema = z.object({
  message: z.string(),
  playlists: PagingPlaylistsSchema,
});

export type FeaturedPlaylistsResponse = z.infer<typeof FeaturedPlaylistsResponseSchema>;
