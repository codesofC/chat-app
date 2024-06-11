import { Ellipsis, Phone, Video } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"


const HearderChat = () => {
  return (
    <div className="w-full p-4 flex items-center justify-between border-b border-secondary">
      <div className="flex items-center gap-2 cursor-pointer">
        <Avatar>
          <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
        <span className="font-semibold"> John Doe </span>
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