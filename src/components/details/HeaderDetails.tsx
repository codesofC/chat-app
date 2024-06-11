import { Avatar, AvatarImage } from "../ui/avatar"


const HeaderDetails = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center px-4 pb-4 border-b border-foreground">
        <Avatar className="w-24 h-24">
            <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
        <div className="flex flex-col items-center">
            <span className="font-bold"> Cristooo Jr </span>
            <span className="text-sm font-extralight"> Lorem ipsum dolor sit amet. </span>
        </div>
    </div>
  )
}

export default HeaderDetails