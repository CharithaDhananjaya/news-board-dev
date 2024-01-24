import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { FirebaseAuth } from "@/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

function AuthLayout() {
  const email = "testuser@newsboard.com";
  const password = "abcd1234";

  useEffect(() => {
    signInWithEmailAndPassword(FirebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("AuthUser", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("ERROR", errorCode, errorMessage);
      });
  });
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
