import { LoginProps } from "@/types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { addUser, signup, uploadFiles } from "@/lib/Firebase";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const SignUp = ({ setHandleSign }: LoginProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [avatar, setAvatar] = useState<File | null>(null);
  const [errorConnection, setErrorConnection] = useState("")


  const navigate = useNavigate();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (files) {
      setAvatar(files[0]);
    }
  };

  //Submit the form
  const submitData = async (data: FieldValues) => {
    let url: string | undefined;

    if (avatar) {
      url = await uploadFiles(avatar);
    }

    await signup(data.email, data.password)
      .then(async (userId) => {
        if (userId) {
          await addUser({
            email: data.email,
            avatar: url || "",
            uid: userId,
            username: data.username,
            blocked: [],
          })
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              console.log("Add User Failed: ", error);
            });
        }
      })
      .catch((error) => {
        setErrorConnection(error.message);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <Card className="mx-12 mt-8 bg-transparent border-none shadow-none">

      {errorConnection && (<p className="text-red-600">
        {errorConnection}
      </p>)}

      <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col gap-4 items-start mx-6 mt-12"
      >
        <div className="relative mx-auto flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={avatar ? URL.createObjectURL(avatar) : "https://api.dicebear.com/9.x/thumbs/svg"}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <label htmlFor="file" className="text-xs">
            {" "}
            Upload your profile picture
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/jpeg, image/webp, image/jpg"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            onChange={handleFile}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            placeholder="Enter your username"
            id="username"
            className={`flex-1 bg-transparent py-4 ${
              errors.username ? "border-red-600" : "border-input"
            }`}
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <span className="text-xs text-red-600"> Field required </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            className={`flex-1 bg-transparent py-4 ${
              errors.email ? "border-red-600" : "border-input"
            }`}
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <span className="text-xs text-red-600"> Field required </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            className={`flex-1 bg-transparent py-4 ${
              errors.password ? "border-red-600" : "border-input"
            }`}
            {...register("password", {
              required: true,
              validate: (value: string) => value.length >= 6,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="text-xs text-red-600"> Field required </span>
          )}
          {errors.password?.type === "validate" && (
            <span className="text-xs text-red-600">
              {" "}
              password must have a minimum of 6 characters{" "}
            </span>
          )}
        </div>

        <div className="flex flex-col text-xs">
          <p>
            I already have a account.{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setHandleSign(false)}
            >
              {" "}
              Sign-in
            </span>{" "}
          </p>
        </div>

        <Button className="bg-primary text-lg font-bold w-full">
          {" "}
          Sign Up{" "}
        </Button>
      </form>
    </Card>
  );
};

export default SignUp;
