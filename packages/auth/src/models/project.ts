import { z } from 'zod';

const projectSchema = z.object({
  __typename: z.literal('Project').default('Project'),
  id: z.string().uuid(),
  ownerId: z.string().uuid(),
});

type Project = z.infer<typeof projectSchema>;

export { projectSchema };
export type { Project };
