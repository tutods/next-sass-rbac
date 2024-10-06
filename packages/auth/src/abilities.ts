import { z } from 'zod';
import { inviteSubject, organizationSubject, projectSubject, userSubject } from '~/subjects';
import { billingSubject } from '~/subjects/billing';

const appAbilitiesSchema = z.union([
  userSubject,
  projectSubject,
  organizationSubject,
  inviteSubject,
  billingSubject,
  z.tuple([z.literal('manage'), z.literal('all')]),
]);

type AppAbilities = z.infer<typeof appAbilitiesSchema>;

export { appAbilitiesSchema };
export type { AppAbilities };
