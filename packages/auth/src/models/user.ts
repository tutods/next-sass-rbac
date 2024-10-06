import { z } from 'zod';
import { roleSchema } from '~/roles';

const userSchema = z.object({
  id: z.string().uuid(),
  role: roleSchema,
});

type User = z.infer<typeof userSchema>;

export { userSchema };
export type { User };
