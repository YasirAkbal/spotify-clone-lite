/**
 * Auth State Types
 * Types for OAuth and authentication state
 */

import type { SpotifyTokenResponse, MockUser, MockAuthResponse } from '../api/auth';

// OAuth Types
export type OAuthPayload = SpotifyTokenResponse;

export interface OAuthState {
  auth: OAuthPayload | null;
  expiresAt: number | null;
}

// Mock Auth Types (for fake auth with MSW)
export type FakeAuthUser = MockUser;
export type FakeAuthPayload = MockAuthResponse;

export interface FakeAuthState {
  auth: FakeAuthPayload | null;
  isAuthenticated: boolean;
}
