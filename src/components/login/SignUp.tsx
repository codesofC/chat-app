import { LoginProps } from "@/types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

const SignUp = ({setHandleSign}: LoginProps) => {
  return (
    <Card className="mx-12 mt-12 bg-transparent border-none shadow-none">
      <h1 className="text-2xl text-black text-center"> Sign Up </h1>

      <form className="flex flex-col gap-6 items-start mx-6 mt-12">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="fullname">Fullname</label>
          <Input
            type="text"
            placeholder="Enter your fullname"
            className="flex-1 bg-transparent py-4"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent py-4"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="flex-1 bg-transparent py-4"
          />
        </div>

        <div className="flex flex-col">
          <p>
            I have a account already?{" "}
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
