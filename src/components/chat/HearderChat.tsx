import { Ellipsis, Phone, Video } from "lucide-react"
import { useChatContext } from "@/context/useChatContext"
import MyAvatar from "../MyAvatar"


const HearderChat = () => {

  const {currentReceiver} = useChatContext()

  if(!currentReceiver) return

  return (
    <div className="w-full p-4 flex items-center justify-between border-b border-secondary">
      <div className="flex items-center gap-2 cursor-pointer">
        <MyAvatar username={currentReceiver.receiverData?.username || ""} avatarUrl={currentReceiver.receiverData?.avatar} />
        <span className="font-semibold"> {currentReceiver.receiverData?.username} </span>
      </div>

      <div className="flex items-center justify-center gap-6">
        <Phone className="cursor-pointer hover:text-primary" />
        <Video className="cursor-pointer hover:text-primary" />
        <Ellipsis className="cursor-pointer hover:text-primary" />
      </div>
    </div>
  )
}

export default HearderChat