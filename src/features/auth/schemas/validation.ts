import { z } from 'zod';

/**
 * Reusable validation schemas for form fields
 * These are used across different features (register, profile update, etc.)
 */

export const emailSchema = z.email({ message: 'Invalid email format' });

export const passwordSchema = z
  .string()
  .min(8, { message: 'Password must contain at least 8 characters' })
  .max(32, { message: "Password can't contain more than 32 characters" })
  .refine((password) => /[a-z]/.test(password), {
    message: 'Password must contain at least one lowercase letter',
  })
  .refine((password) => /[A-Z]/.test(password), {
    message: 'Password must contain at least one uppercase letter',
  })
  .refine((password) => /[0-9]/.test(password), {
    message: 'Password must contain at least one number',
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: 'Password must contain at least one special character',
  });

export const usernameSchema = z
  .string()
  .min(3, { message: 'Username must be at least 3 characters' })
  .max(20, { message: "Username can't be more than 20 characters" })
  .refine((username) => /^[a-zA-Z0-9_]+$/.test(username), {
    message: 'Username can only contain letters, numbers, and underscores',
  });

export const nameSchema = z
  .string()
  .min(2, { message: 'Name must be at least 2 characters' })
  .max(50, { message: "Name can't be more than 50 characters" })
  .refine((name) => /^[a-zA-Z\s'-]+$/.test(name), {
    message: 'Name can only contain letters, spaces, apostrophes, and hyphens',
  });

export const birthDateSchema = z.string().min(1, { message: 'Birth date is required' });
