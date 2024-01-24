import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignUpValidation = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email().min(2),
  username: z.string().min(2),
  password: z.string().min(2),
});
