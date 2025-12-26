/**
 * User State Types
 * Types for user profile state
 */

import type { CurrentUserProfileType } from '../api/spotify';

export interface UserState {
  profile: CurrentUserProfileType | null;
}
