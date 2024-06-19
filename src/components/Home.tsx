import { Card } from "./ui/card";
import Chat from "./chat";
import Details from "./details";
import List from "./list";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/Firebase";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "@/context/useGlobalContext";
import ChatContext from "@/context/ChatContext";

const Home = () => {
  const { setSessionId, isLoading } = useGlobalContext();
  const navigate = useNavigate();


  useEffect(() => {
    const getIfIsSession = async () => {
      await onAuthStateChanged(auth, (userCredencial) => {
        if (userCredencial) {
          setSessionId(userCredencial.uid);
        } else {
          navigate("/login");
        }
      });
    };
    getIfIsSession();
  }, [setSessionId, navigate]);

  if(isLoading){
    return (
      <div className="w-screen h-screen absolute top-0 left-0 z-50 bg-white flex flex-col gap-4 items-center justify-center">
        <div className="custom-loader"></div>
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <ChatContext>
      <Card className="relative w-full h-full flex rounded-none overflow-hidden border-none">
        <List 
        />
        <Chat />
        <Details 
        />
      </Card>
    </ChatContext>
  );
};

export default Home;
