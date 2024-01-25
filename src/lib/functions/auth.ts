import { FirebaseAuth, FirestoreDB } from "../../firebase.init";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import {
  SignUpValidation,
  SignInValidation,
  UserRecordValidation,
} from "@/lib/validations/index";
import * as z from "zod";

async function userSignUp(newUser: z.infer<typeof SignUpValidation>) {
  createUserWithEmailAndPassword(FirebaseAuth, newUser.email, newUser.password)
    .then((userCredential) => {
      const userRecord = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        username: newUser.username,
      };

      createUserinDB(userRecord, userCredential.user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error", errorCode, errorMessage);
    });
}

//Creating the User in FirestoreDB
async function createUserinDB(userRecord: UserRecordValidation, uid: string) {
  await setDoc(doc(FirestoreDB, "users", uid), userRecord).then(() => {
    console.log("User Created");
  });
}

export { userSignUp };
