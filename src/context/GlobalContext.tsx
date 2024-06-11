

import { context } from "./useGlobalContext"
import {   useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {  getUser } from "@/lib/Firebase";


const GlobalContext = ({ children }: {children: React.ReactNode}) => {

  const [sessionId, setSessionId] = useState("")
  const {data: user, isPending: isLoading, isError} = useQuery({
    queryKey: ["user", sessionId],
    queryFn: () => getUser(sessionId)
  })



  if(isError){
    return <div>Error</div>
  }

  return <context.Provider value={{ user, isLoading, sessionId, setSessionId}}>
    {children}
  </context.Provider>;
};

export default GlobalContext

