import {  ChatContextProps } from "@/types";
import { createContext, useContext } from "react"


export const contextOfChat = createContext<ChatContextProps | null>(null);


export const useChatContext = () => {
    const data = useContext(contextOfChat)
  
    if(!data){
        throw("Not match context data!")
    }
  
    return data
  
}