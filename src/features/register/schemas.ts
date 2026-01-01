/**
 * Register Schemas
 * @deprecated Use schemas from '@/features/auth/schemas' instead
 * This file is kept for backward compatibility
 */

export {
  // Validation schemas
  passwordSchema,
  usernameSchema,
  nameSchema,
  birthDateSchema,
} from '../auth/schemas/validation';

export {
  // Form schema
  MockRegisterFormSchema as userSchema,
  // User schema
  MockUserBaseSchema as registeredUserSchema,
} from '../auth/schemas/mockAuth';
