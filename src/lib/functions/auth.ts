//import { FirebaseAuth } from "../../firebase.init";

import { SignUpValidation, SignInValidation } from "@/lib/validations/index";
import * as z from "zod";

function userSignUp(newUser: z.infer<typeof SignUpValidation>) {
  console.log("UserSignUP", newUser);
}

function userSignIn(signInUser: z.infer<typeof SignInValidation>) {
  console.log("UserSignUP", signInUser);
}

export { userSignUp, userSignIn };
