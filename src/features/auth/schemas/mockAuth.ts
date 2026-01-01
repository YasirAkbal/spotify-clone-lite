import { z } from 'zod';
import {
  emailSchema,
  passwordSchema,
  usernameSchema,
  nameSchema,
  birthDateSchema,
} from './validation';

/**
 * Mock Authentication Schemas
 * Used for fake auth with MSW (development/testing)
 *
 * Types are exported from @/types/api/auth
 */

export const MockUserBaseSchema = z.object({
  id: z.string(),
  email: emailSchema,
  username: usernameSchema,
  firstName: nameSchema,
  lastName: nameSchema,
  birthDate: z.string().optional(),
  avatar: z.url(),
});

export const MockRegisterFormSchema = MockUserBaseSchema.pick({
  email: true,
  username: true,
  firstName: true,
  lastName: true,
})
  .extend({
    password: passwordSchema,
    confirmPassword: z.string(),
    birthDate: birthDateSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const MockLoginFormSchema = z.object({
  email: z.string().min(1, { message: 'Email or username is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const MockAuthResponseSchema = z.object({
  user: MockUserBaseSchema,
  token: z.string(),
});

export const MockCurrentUserSchema = MockUserBaseSchema;
