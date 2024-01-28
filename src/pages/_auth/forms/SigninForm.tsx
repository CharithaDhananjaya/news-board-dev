import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FirebaseAuth } from "@/firebase.init";

import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadui/Form";
import Input from "@/components/Input";
import { SignInValidation } from "@/lib/validations/index";

function SignInForm() {
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function userSignIn(signInUser: z.infer<typeof SignInValidation>) {
    signInWithEmailAndPassword(
      FirebaseAuth,
      signInUser.email,
      signInUser.password
    )
      .then((userCredential) => {
        navigate("/user-dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Form {...form}>
      <div className="flex flex-col text-center">
        <h1 className="pt-5 text-2xl font-bold md:text-3xl">
          Login to your Account
        </h1>
        <p className="mt-2 text-sm font-light md:text-md ">
          To use NewsBoard, Please Login
        </p>
      </div>
      <form
        onSubmit={form.handleSubmit(userSignIn)}
        className="flex flex-col w-full gap-2 mt-4 md:w-3/5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }: { field: string }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">E mail</FormLabel>
              <FormControl>
                <Input type="input" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }: { field: string }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="self-center w-3/5 mt-4 md:w-2/5">
          Login
        </Button>
        <div className="flex flex-row self-center gap-1">
          <p className="mt-2 text-xs font-light md:text-xs ">
            Don't have an account?
          </p>
          <Link
            to="/sign-up"
            className="mt-2 text-xs font-bold text-blue-800 md:text-xs "
          >
            Register here
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default SignInForm;
