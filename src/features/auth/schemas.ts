import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().trim().min(3, "At least 3 characters required."),
  email: z.string().email(),
  password: z.string().min(6, "At least 6 characters required.").max(256),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "At least 6 characters required.").max(256),
});
