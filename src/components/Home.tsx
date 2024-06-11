import { Card } from "./ui/card";
import Chat from "./chat";
import Details from "./details";
import List from "./list";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/Firebase";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "@/context/useGlobalContext";

const Home = () => {

  const { setSessionId } = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => {
    const getIfIsSession = async () => {
      await onAuthStateChanged(auth, (userCredencial) => {
        if(userCredencial){
          setSessionId(userCredencial.uid) 
        } else {
          navigate("/login")
        }
      })
    }
    getIfIsSession()
  }, [setSessionId, navigate])
  

  return (
    <Card className="w-4/5 h-[90%] flex rounded-xl overflow-hidden">
      <List />
      <Chat />
      <Details />
    </Card>
  );
};

export default Home;
