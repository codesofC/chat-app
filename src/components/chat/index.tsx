import { useChatContext } from "@/context/useChatContext"
import ChatContent from "./ChatContent"
import FooterChat from "./FooterChat"
import HearderChat from "./HearderChat"


const Chat = () => {

  const { currentReceiver } = useChatContext()

  return currentReceiver?.receiverData ?(
    <div className="relative w-full md:w-auto md:flex-[2] bg-foreground flex flex-col min-h-full overflow-hidden">
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