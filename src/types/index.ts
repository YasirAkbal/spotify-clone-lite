/**
 * Centralized Type Exports
 *
 * This is the main entry point for all types in the application.
 * Import types from here to maintain consistency across the codebase.
 *
 * Usage:
 *   import type { CurrentUserProfileType, OAuthState, IconProps } from '@/types';
 *
 * Structure:
 *   - api/       : Types for API responses (derived from Zod schemas)
 *   - store/     : Types for Redux state slices
 *   - components/: Types for React component props
 */

export * from './api';

export * from './store';

export * from './components';
