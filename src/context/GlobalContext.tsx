

import { context } from "./useGlobalContext"
import {   useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {  getUser } from "@/lib/Firebase";


const GlobalContext = ({ children }: {children: React.ReactNode}) => {

  const [sessionId, setSessionId] = useState("")
  const {data: user, isPending: isLoading} = useQuery({
    queryKey: ["user", sessionId],
    queryFn: sessionId.length > 0 ? () => getUser(sessionId) : undefined
  })



  

  return <context.Provider value={{ user, isLoading, sessionId, setSessionId}}>
    {children}
  </context.Provider>;
};

export default GlobalContext

