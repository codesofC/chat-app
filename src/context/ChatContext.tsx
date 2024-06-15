import { ChatDataProps, ReceiverProps } from "@/types"
import { contextOfChat } from "./useChatContext"
import { useEffect, useState } from "react"
import { db } from "@/lib/Firebase"
import { doc, onSnapshot } from "firebase/firestore"


const ChatContext = ({ children }: {children: React.ReactNode}) => {
  
    const [currentReceiver, setCurrentReceiver] = useState<ReceiverProps>()
    const [chatData, setChatData] = useState<ChatDataProps>()

    //Listen chat data update from database in realtime
    useEffect(() => {
      if(currentReceiver?.chatId){
        const unsubscribe = onSnapshot(doc(db, `chats/${currentReceiver.chatId}`), (doc) => {
          setChatData(doc.data() as ChatDataProps)
        })


        return () => unsubscribe()
      }
    }, [currentReceiver?.chatId])

    return (
    <contextOfChat.Provider value={{currentReceiver, setCurrentReceiver, chatData, setChatData}}>
        { children }
    </contextOfChat.Provider>
  )
}

export default ChatContext