import { CurrentUserProfile } from '../../features/user/schemas';
import type { z } from 'zod';

export type CurrentUserProfileType = z.infer<typeof CurrentUserProfile>;
