import { GlobalContextProps } from "@/types";
import { createContext, useContext } from "react"


export const context = createContext<GlobalContextProps | null>(null);


export const useGlobalContext = () => {
    const data = useContext(context)
  
    if(!data){
        throw("Not match context data!")
    }
  
    return data
  
}