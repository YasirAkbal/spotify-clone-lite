/**
 * Common API Types
 * Reusable type definitions used across features for Spotify API data structures
 */

export interface ExternalUrls {
  spotify: string;
}

export interface SpotifyImage {
  url: string;
  height?: number;
  width?: number;
}

export interface SpotifyImageWithDimensions {
  url: string;
  height: number;
  width: number;
}

export interface PagingObject<T> {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: T[];
}

export interface UserRef {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: 'user';
  uri: string;
}

export interface UserWithDisplayName extends UserRef {
  display_name: string;
}

export interface Restrictions {
  reason: string;
}
