/**
 * Auth API Types
 * Types derived from Zod schemas for authentication
 */

import type { z } from 'zod';
import type { SpotifyTokenResponseSchema } from '../../features/auth/schemas/oauth';
import type {
  MockUserBaseSchema,
  MockAuthResponseSchema,
  MockRegisterFormSchema,
  MockLoginFormSchema,
} from '../../features/auth/schemas/mockAuth';

export type SpotifyTokenResponse = z.infer<typeof SpotifyTokenResponseSchema>;
export type OAuthPayload = SpotifyTokenResponse;

export type MockUser = z.infer<typeof MockUserBaseSchema>;
export type MockCurrentUser = MockUser;

export type MockRegisterFormData = z.infer<typeof MockRegisterFormSchema>;
export type MockRegisterRequest = Omit<MockRegisterFormData, 'confirmPassword'>;
export type MockRegisterResponse = z.infer<typeof MockAuthResponseSchema>;

export type MockLoginFormData = z.infer<typeof MockLoginFormSchema>;
export type MockLoginRequest = MockLoginFormData;
export type MockLoginResponse = z.infer<typeof MockAuthResponseSchema>;

export type MockAuthResponse = z.infer<typeof MockAuthResponseSchema>;
