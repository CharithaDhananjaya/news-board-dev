//import { FirebaseAuth } from "../../firebase.init";

import { SignUpValidation } from "@/lib/validations/index";
import * as z from "zod";

function userSignUp(newUser: z.infer<typeof SignUpValidation>) {
  console.log("UserSignUP", newUser);
}

export { userSignUp };
