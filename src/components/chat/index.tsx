import { useGlobalContext } from "@/context/useGlobalContext"
import ChatContent from "./ChatContent"
import FooterChat from "./FooterChat"
import HearderChat from "./HearderChat"


const Chat = () => {

  const {user} = useGlobalContext()

  console.log(user);


  return (
    <div className="relative flex-[2] bg-foreground flex flex-col max-h-[100%]">
        <HearderChat />
        <ChatContent />
        <FooterChat />
    </div>
  )
}

export default Chat