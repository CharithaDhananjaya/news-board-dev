import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FirebaseAuth, FirestoreDB } from "@/firebase.init";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
import {
  SignUpValidation,
  UserRecordValidation,
} from "@/lib/validations/index";

const SignUpForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
  });

  async function userSignUp(newUser: z.infer<typeof SignUpValidation>) {
    createUserWithEmailAndPassword(
      FirebaseAuth,
      newUser.email,
      newUser.password
    )
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

  return (
    <Form {...form}>
      <div className="flex flex-col text-center">
        <h1 className="pt-5 text-2xl font-bold md:text-3xl">
          Create a new account
        </h1>
        <p className="mt-2 text-sm font-light md:text-md ">
          To use NewsBoard, Please enter your details
        </p>
      </div>
      <form
        onSubmit={form.handleSubmit(userSignUp)}
        className="flex flex-col w-full gap-2 mt-4 md:w-3/5"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }: { field: z.infer<typeof SignUpValidation> }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">
                First Name
              </FormLabel>
              <FormControl>
                <Input type="input" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }: { field: z.infer<typeof SignUpValidation> }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Last Name</FormLabel>
              <FormControl>
                <Input type="input" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }: { field: z.infer<typeof SignUpValidation> }) => (
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
          name="username"
          render={({ field }: { field: z.infer<typeof SignUpValidation> }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Username</FormLabel>
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
          render={({ field }: { field: z.infer<typeof SignUpValidation> }) => (
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
          Submit
        </Button>
        <div className="flex flex-row self-center gap-1">
          <p className="mt-2 text-xs font-light md:text-xs ">
            Already have an account?
          </p>
          <Link
            to="/sign-in"
            className="mt-2 text-xs font-bold text-blue-800 md:text-xs "
          >
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
