import { userSchema } from '@/validators/user';
import z from 'zod';

export type UserTypes = z.infer<typeof userSchema>;
