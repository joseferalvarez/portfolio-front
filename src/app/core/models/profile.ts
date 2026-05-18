import { z } from 'zod';

const socialAccount = z.object({
  name: z.string(),
  url: z.url(),
  icon: z.string(),
});

const profileCard = z.object({
  name: z.string(),
  lastname: z.string(),
  avatar: z.url(),
  bio: z.string(),
  curriculum: z.string(),
  social_accounts: z.array(socialAccount),
});

const profileSection = z.object({
  position: z.string(),
  description: z.string(),
});

const profileProject = z.object({
  name: z.string(),
  description: z.string(),
  webpage: z.url(),
  logo: z.url(),
});

export type IProfileCard = z.infer<typeof profileCard>;
export type IProfileSection = z.infer<typeof profileSection>;
export type IProfileProject = z.infer<typeof profileProject>;
