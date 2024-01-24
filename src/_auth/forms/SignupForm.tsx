import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useNavigate } from "react-router-dom";

//import { INewUser } from "@/types/index";

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
import { SignUpValidation } from "@/lib/validations/index";

const SignUpForm = () => {
  const navigate = useNavigate();

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

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignUpValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    navigate("/sign-in");
    console.log(values);
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
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-2 mt-4 md:w-3/5"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }: { field: string }) => (
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
          render={({ field }: { field: string }) => (
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
          name="username"
          render={({ field }: { field: string }) => (
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
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
