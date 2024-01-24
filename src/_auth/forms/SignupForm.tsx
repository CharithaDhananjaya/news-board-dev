import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "@/components/Button";
import Input from "@/components/Input";

import { INewUser } from "@/types/index";

function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<INewUser>();

  const registerUser: SubmitHandler<INewUser> = (data) => {
    console.log("New User", data);
  };

  useEffect(() => {
    setError("firstName", { types: { required: "First Name is Required." } });
    setError("lastName", { types: { required: "Last Name is Required." } });
    setError("email", {
      types: {
        required: "Email is Required.",
        pattern: "Enter Correct Email.",
      },
    });
    setError("userName", { types: { required: "Username is Required." } });
    setError("password", {
      types: {
        required: "Password is Required",
        minLength:
          "Password atleast 8 Characters, One letter, One Number and one Special Charactor.",
      },
    });
  }, [setError]);

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <Input {...register("firstName", { required: true })} />
      {errors.firstName && errors.firstName.types && (
        <p>{errors.firstName.types.required}</p>
      )}
      <Input {...register("lastName", { required: true })} />
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.required}</p>
      )}
      <Input
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
        })}
      />
      {errors.email && errors.email.types && (
        <p>{errors.email.types.required}</p>
      )}
      {errors.email && errors.email.types && (
        <p>{errors.email.types.pattern}</p>
      )}
      <Input {...register("userName", { required: true })} />
      {errors.userName && errors.userName.types && (
        <p>{errors.userName.types.required}</p>
      )}
      <Input
        type="password"
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        })}
      />
      {errors.password && errors.password.types && (
        <p>{errors.password.types.required}</p>
      )}
      {errors.password && errors.password.types && (
        <p>{errors.password.types.pattern}</p>
      )}
      <Button type="submit">Register the User</Button>
    </form>
  );
}

export default SignupForm;
