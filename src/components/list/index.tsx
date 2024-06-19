
import { useChatContext } from "@/context/useChatContext"
import ChatList from "./ChatList"
import UserInfos from "./UserInfos"

const List = () => {

  const {showChatList, currentReceiver} = useChatContext()

  return (
    <div className={`absolute sm:relative ${!currentReceiver ? 'flex z-20 ' : (showChatList ? 'flex z-20' : 'hidden sm:flex')} flex-col w-full sm:w-auto h-full flex-1 bg-background`}>
      <UserInfos />
      <ChatList />
    </div>
  )
}

export default List