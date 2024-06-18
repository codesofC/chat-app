import { Ellipsis, Phone, Video } from "lucide-react"
import { useChatContext } from "@/context/useChatContext"
import MyAvatar from "../MyAvatar"
import MyPopOver from "../MyPopOver"
import { Button } from "../ui/button"


const HearderChat = () => {

  const {currentReceiver, setShowChatList, setShowDetails} = useChatContext()

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
        <MyPopOver buttonOver={<Ellipsis className="cursor-pointer hover:text-primary z-10" />} popOverClassName="flex flex-col lg:hidden">
          <Button className="w-full bg-transparent text-secondary-foreground hover:bg-primary hover:text-foreground sm:hidden"
            onClick={() => setShowChatList(true)}
          > Show List </Button>
          <Button className="w-full bg-transparent text-secondary-foreground hover:bg-primary hover:text-foreground"
            onClick={() => setShowDetails(true)}
          > Show Details </Button>
        </MyPopOver>
      </div>
    </div>
  )
}

export default HearderChat