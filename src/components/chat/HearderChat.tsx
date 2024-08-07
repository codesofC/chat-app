import { Ellipsis, Phone, Video } from "lucide-react"
import { useChatContext } from "@/context/useChatContext"
import MyAvatar from "../MyAvatar"
import MyPopOver from "../MyPopOver"
import { Button } from "../ui/button"


const HearderChat = () => {

  const {currentReceiver, setShowChatList, setShowDetails} = useChatContext()

  if(!currentReceiver) return

  return (
    <div className="w-full px-4 py-6 flex items-center justify-between border-b border-secondary shadow-md">
      <div className="flex items-center gap-2 cursor-pointer">
        <MyAvatar email={currentReceiver.receiverData?.email || ""} avatarUrl={currentReceiver.receiverData?.avatar} />
        <span className="font-semibold"> {currentReceiver.receiverData?.username} </span>
      </div>

      <div className="flex items-center justify-center gap-6">
        <Phone className="cursor-pointer hover:text-primary" />
        <Video className="cursor-pointer hover:text-primary" />
        <MyPopOver buttonOver={<Ellipsis className="cursor-pointer hover:text-primary z-10" />} popOverClassName="flex flex-col lg:hidden z-10">
          <Button className="w-full bg-transparent text-secondary-foreground hover:bg-primary hover:text-secondary sm:hidden"
            onClick={() => setShowChatList(true)}
          > Show List </Button>
          <Button className="w-full bg-transparent text-secondary-foreground hover:bg-primary hover:text-secondary"
            onClick={() => setShowDetails(true)}
          > Show Details </Button>
        </MyPopOver>
      </div>
    </div>
  )
}

export default HearderChat