import { z } from 'zod';

const userSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('update'), z.literal('delete')]),
  z.literal('User'),
]);

type UserSubject = z.infer<typeof userSubject>;

export { userSubject };
export type { UserSubject };
