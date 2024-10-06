import { z } from 'zod';

const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'),
  id: z.string().uuid(),
  ownerId: z.string().uuid(),
});

type Organization = z.infer<typeof organizationSchema>;

export { organizationSchema };
export type { Organization };
