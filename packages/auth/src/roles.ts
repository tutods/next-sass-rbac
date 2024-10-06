import { z } from 'zod';

/**
 * List of possible roles.
 */
const roleSchema = z.union([z.literal('ADMIN'), z.literal('MEMBER'), z.literal('BILLING')]);

type Role = z.infer<typeof roleSchema>;

export { roleSchema };
export type { Role };
