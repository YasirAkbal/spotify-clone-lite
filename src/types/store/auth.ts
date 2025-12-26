/**
 * Auth State Types
 * Types for OAuth and authentication state
 */

import type { z } from 'zod';
import type { SpotifyTokenResponse } from '../api/spotify';
import { FakeAuthUserSchema } from '../../features/auth/schemas';

// OAuth Types (derived from Zod schema)
export type OAuthPayload = SpotifyTokenResponse;

export interface OAuthState {
  auth: OAuthPayload | null;
  expiresAt: number | null;
}

// Fake Auth Types
export type FakeAuthUser = z.infer<typeof FakeAuthUserSchema>;

export interface FakeAuthPayload {
  user: FakeAuthUser;
  token: string;
}

export interface FakeAuthState {
  auth: FakeAuthPayload | null;
  isAuthenticated: boolean;
}
