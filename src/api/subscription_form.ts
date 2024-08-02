import { z } from 'zod';

export const subscription_form_schema = z.object({
  email: z.string().email(),
  name: z.string().optional().nullish()
});
