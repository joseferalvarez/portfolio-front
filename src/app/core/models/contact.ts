import z from 'zod';

const contact = z.object({
  name: z.string(),
  email: z.email(),
  company: z.string(),
  phone: z.string(),
  linkedin: z.url(),
  message: z.string(),
});

export type Contact = z.infer<typeof contact>;
