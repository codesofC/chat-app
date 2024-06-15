import { useChatContext } from "@/context/useChatContext"
import ChatContent from "./ChatContent"
import FooterChat from "./FooterChat"
import HearderChat from "./HearderChat"


const Chat = () => {

  const { currentReceiver } = useChatContext()

  return currentReceiver?.receiverData ?(
    <div className="relative flex-[2] bg-foreground flex flex-col max-h-[100%]">
        <HearderChat />
        <ChatContent />
        <FooterChat />
    </div>
  ) : (
    <div className="flex-[2] h-full bg-foreground flex items-center justify-center font-semibold">
      No User Selected
    </div>
  )
}

export default Chat