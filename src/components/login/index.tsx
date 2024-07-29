import { useState } from "react";
import { Button } from "../ui/button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
  const [handleSign, setHandleSign] = useState(false);

  
  
  return (
    <main className="w-full h-full lg:w-[90%] xl:w-4/5 lg:h-[90%] grid lg:grid-cols-2 rounded-xl overflow-hidden shadow-xl dark:shadow-2xl">
      <div className="hidden lg:flex w-full">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/chatting-1805543-1537818.png" className="w-full h-full object-contain" />
      </div>
      <div className="relative flex flex-col z-10 overflow-hidden">
        <div className="relative px-8 py-12 ">
          <div
            className={
              "relative rounded-full grid grid-cols-2 border w-full"
            }
          >
            <Button
              className={`bg-transparent text-secondary-foreground text-lg py-6 cursor-pointer rounded-full hover:bg-transparent ${
                !handleSign && "text-white"
              } delay-200`}
              onClick={() => setHandleSign(false)}
            >
              {" "}
              Sign In{" "}
            </Button>
            <Button
              className={`bg-transparent text-secondary-foreground text-lg py-6 cursor-pointer rounded-full hover:bg-transparent ${
                handleSign && "text-white"
              } delay-200`}
              onClick={() => setHandleSign(true)}
            >
              {" "}
              Sign Up{" "}
            </Button>
            <div
              className={`w-1/2 h-[85%] absolute top-1/2 -translate-y-1/2 ${
                !handleSign ? "left-[1%]" : "left-[49%]"
              } bg-primary rounded-full -z-10 transition-['left'] duration-500`}
            />
          </div>
        </div>
        {!handleSign ? 
            <SignIn 
                setHandleSign={setHandleSign}  
            /> 
            : 
            <SignUp 
                setHandleSign={setHandleSign}
            />}
      </div>
    </main>
  );
};

export default Login;
