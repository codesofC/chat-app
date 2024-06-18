
import { useChatContext } from "@/context/useChatContext"
import ChatList from "./ChatList"
import UserInfos from "./UserInfos"
import { X } from "lucide-react"

const List = () => {

  const {setShowChatList, showChatList, currentReceiver} = useChatContext()

  return (
    <div className={`absolute sm:relative ${!currentReceiver ? 'flex z-20 ' : (showChatList ? 'flex z-20' : 'hidden sm:flex')} flex-col w-full sm:w-auto h-full flex-1 bg-background`}>
      <UserInfos />
      <ChatList />
      <X className="absolute top-1 right-2 cursor-pointer" onClick={() => setShowChatList(!currentReceiver ? true : false)} />
    </div>
  )
}

export default List