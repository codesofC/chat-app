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
import Loading from "./Loading";

const Home = () => {
  const { setSessionId, isLoading } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getIfIsSession = () => {
       onAuthStateChanged(auth, (userCredencial) => {
        if (userCredencial) {
          setSessionId(userCredencial.uid);
        } else {
          navigate("/login");
        }
      });
    };
    getIfIsSession();
  }, [setSessionId, navigate]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
      <ChatContext>
        <Card className="relative w-full h-full flex rounded-none overflow-hidden border-none">
          <List />
          <Chat />
          <Details />
        </Card>
      </ChatContext>
  );
};

export default Home;
