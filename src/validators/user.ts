import z from 'zod';

export const userSchema = z.object({
  name: z.string().min(2),
  phoneNumber: z.string().regex(/^(\+62|0)\d{9,13}$/),
  age: z.number().min(18),
});
