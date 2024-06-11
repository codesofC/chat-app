import { LoginProps } from "@/types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { signIn } from "@/lib/Firebase";
import { useGlobalContext } from "@/context/useGlobalContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = ({ setHandleSign }: LoginProps) => {

  const { register, handleSubmit, formState: {errors}, reset } = useForm()

  const [errorConnection, setErrorConnection] = useState("")

  const {setSessionId} = useGlobalContext()
  const navigate = useNavigate()

  const submitData = async (data: FieldValues) => {
    await signIn(data.email, data.password)
    .then(userId => {
      if(userId){
        setSessionId(userId)
        navigate("/")
      }
    })
    .catch(err => {
      setErrorConnection(err.message)
    })
    .finally(() => {
      reset()
    })
  }

  return (
    <Card className="mx-12 mt-12 bg-transparent border-none shadow-none">
      <h1 className="text-2xl text-black text-center"> Sign In </h1>

      {errorConnection && (<p className="text-red-600">
        {errorConnection}
      </p>)}

      <form 
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col gap-6 items-start mx-6 mt-12"
      >
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <Input 
            type="email"
            placeholder="Enter your email"
            className={`flex-1 bg-transparent py-4 ${errors.email ? 'border-red-600' : 'border-input'}`}
            {...register("email", {required: true})}
          />
          {errors.email?.type === "required" && (
            <span className="text-xs text-red-600"> Field required </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email">Password</label>
          <Input 
            type="password"
            placeholder="Enter your password"
            className={`flex-1 bg-transparent py-4 ${errors.password ? 'border-red-600' : 'border-input'}`}
            {...register("password", {
              required: true,
              validate: (value: string) => value.length >= 6
            })}
          />
          {errors.password?.type === "required" && (
            <span className="text-xs text-red-600"> Field required </span>
          )}
          {errors.password?.type === "validate" && (
            <span className="text-xs text-red-600"> password must have a minimum of 6 characters </span>
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-xs">I don't have account already? {" "}
            <span 
              className="text-primary underline cursor-pointer"
              onClick={() => setHandleSign(true)}
            > 
              Sign-up 
            </span> 
          </p>
          <a href="#" className="text-xs text-primary underline cursor-pointer"> Forget password ?  </a>
        </div>

        <Button className="bg-primary text-lg font-bold w-full"> Sign In </Button>
      </form>
    </Card>
  );
};

export default SignIn;
