import { z } from 'zod';

const inviteSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('create'), z.literal('delete')]),
  z.literal('Invite'),
]);

type InviteSubject = z.infer<typeof inviteSubject>;

export { inviteSubject };
export type { InviteSubject };
