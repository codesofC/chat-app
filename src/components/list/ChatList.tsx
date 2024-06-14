import { Search } from "lucide-react";
import { Input } from "../ui/input";
import CardChat from "./CardChat";
import AddNewChat from "./AddNewChat";
import { useGlobalContext } from "@/context/useGlobalContext";
import { getChats, getUser } from "@/lib/Firebase";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { sessionId, user } = useGlobalContext();

  const {data: allChatsData, isPending: chatsLoading, isError} = useQuery({
    queryKey: ['chatsData'],
    queryFn: fetchChats,
    enabled: user !== undefined
  })

  async function fetchChats() {
    const chatsData = await getChats(sessionId)

    if(chatsData){
      const chatsWithReceiverData = chatsData.chats.map(async(item) => {
        const receiverData = await getUser(item.receiverId)
        
        if(receiverData){
          return {...item, receiverData, isExist: true}
        }else{
          return {...item, isExist: false}
        }
      })

      const allReceiversData = await Promise.all(chatsWithReceiverData)

      return allReceiversData
    }
  }



  if(isError){
    return <div className="flex w-full text-center text-2xl text-red-600">
      Collection delete from database
    </div>
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-full flex p-4 items-center justify-between">
        <div className="flex items-center border rounded-md gap-2 px-2">
          <Input
            placeholder="Search conversation"
            className="border-none w-full"
          />
          <Search color="gray" className="cursor-pointer" />
        </div>

        <AddNewChat />
      </div>
      {chatsLoading ? (
        <span className="mt-4 w-full text-center"> Loading... </span>
      ) : (
        <div className="w-full flex flex-col divide-y border-y">
          {allChatsData ? allChatsData.map((chat, index) => (
            <CardChat chat={chat} key={index} />
          )) : (
            <span className="mt-4 w-full text-center"> 0 conversation </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatList;
