import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignUpValidation = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email().min(2),
  username: z.string().min(2),
  password: z.string().min(6),
});

export const SignInValidation = z.object({
  email: z.string().email().min(2),
  password: z.string().min(2),
});

export interface UserRecordValidation {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}
