import { z } from 'zod';

const billingSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('export')]),
  z.literal('Billing'),
]);

type BillingSubject = z.infer<typeof billingSubject>;

export { billingSubject };
export type { BillingSubject };
