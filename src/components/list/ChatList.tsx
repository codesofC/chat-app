import { Search } from "lucide-react";
import { Input } from "../ui/input";
import CardChat from "./CardChat";
import AddNewChat from "./AddNewChat";
import { useGlobalContext } from "@/context/useGlobalContext";
import { db, getUser } from "@/lib/Firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatsProps, ReceiverProps } from "@/types";

const ChatList = () => {
  const { sessionId, user } = useGlobalContext();

  const [allChatsData, setAllChatsData] = useState<ReceiverProps []>([])



  useEffect(() => {
    if(user){
      const unsubscribe = onSnapshot(doc(db, `userChats/${sessionId}`), async (doc) => {
        if(doc.exists()){
          const chatsData = doc.data() as ChatsProps

          const chatsWithReceiverData = chatsData.chats.map(async(item) => {
            const receiverData = await getUser(item.receiverId)
            
            if(receiverData){
              return {...item, receiverData}
            }else{
              return {...item}
            }
          })
    
          const allReceiversData = await Promise.all(chatsWithReceiverData)
    
          setAllChatsData(allReceiversData.sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt)))
      }
      })


      return () => unsubscribe()
    }
  }, [user, sessionId])



  return (
    <div className="relative w-full flex flex-col gap-6 items-center overflow-x-hidden overflow-y-auto">
      <div className="w-full flex p-4 items-center justify-between">
        <div className="flex flex-1 items-center border rounded-md gap-2 px-2">
          <Input
            placeholder="Search conversation"
            className="border-none w-full"
          />
          <Search color="gray" className="cursor-pointer" />
        </div>

        <AddNewChat />
      </div>
      {allChatsData ? (
        <div className="w-full divide-y">
          {allChatsData.map((chat, index) => (
            <CardChat chat={chat} key={index} />
          ))}
        </div>
      ): (
        <span className="mt-4 w-full text-center"> 0 conversation </span>
      )}
    </div>
  );
};

export default ChatList;
