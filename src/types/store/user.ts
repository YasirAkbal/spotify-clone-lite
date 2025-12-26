/**
 * User State Types
 * Types for user profile state
 */

import type { CurrentUserProfileType } from '../api/user';

export interface UserState {
  profile: CurrentUserProfileType | null;
}
