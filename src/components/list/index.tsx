
import { useChatContext } from "@/context/useChatContext"
import ChatList from "./ChatList"
import UserInfos from "./UserInfos"

const List = () => {

  const {showChatList, currentReceiver} = useChatContext()

  return (
    <div className={`absolute sm:relative ${!currentReceiver ? 'flex z-20 ' : (showChatList ? 'flex z-20' : 'hidden sm:flex')} flex-col w-full sm:w-1/5 md:w-1/4 h-full bg-background`}>
      <UserInfos />
      <ChatList />
    </div>
  )
}

export default List