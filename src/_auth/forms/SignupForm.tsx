import { useForm, SubmitHandler } from "react-hook-form";

import Button from "@/components/Button";
import Input from "@/components/Input";

import { INewUser } from "@/types/index";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<INewUser>();

  const registerUser: SubmitHandler<INewUser> = (data) => {
    console.log("New User", data);
  };

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <Input {...register("firstName")} />
      <Input {...register("lastName")} />
      <Input
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
        })}
      />
      {errors.email && <span>This field is required</span>}

      <Input {...register("userName")} />
      <Input type="password" {...register("password")} />

      <Button type="submit">Register the User</Button>
    </form>
  );
}

export default SignupForm;
