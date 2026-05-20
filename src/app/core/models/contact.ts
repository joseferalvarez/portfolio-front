import z from 'zod';

const contact = z.object({
  name: z.string(),
  email: z.email(),
  company: z.string(),
  phone: z.string(),
  linkedin: z.url(),
  message: z.string(),
});

const contactDto = z.object({
  name: z.string(),
  email: z.string(),
  company: z.string().optional(),
  phone: z.string().optional(),
  linkedin: z.string().optional(),
  message: z.string(),
});

export type Contact = z.infer<typeof contact>;
export type ContactDto = z.infer<typeof contactDto>;
