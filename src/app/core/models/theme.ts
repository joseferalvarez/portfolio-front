import { z } from 'zod';

const theme = z.enum(['default', 'dark', 'light']);

export type Theme = z.infer<typeof theme>;
