import { z } from 'zod';

const lang = z.enum(['en', 'es']);

export type Lang = z.infer<typeof lang>;
