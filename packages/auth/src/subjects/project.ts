import { z } from 'zod';
import { projectSchema } from '~/models/project';

const projectSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('create'), z.literal('update'), z.literal('delete')]),
  z.union([z.literal('Project'), projectSchema]),
]);

type ProjectSubject = z.infer<typeof projectSubject>;

export { projectSubject };
export type { ProjectSubject };
