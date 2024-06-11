import { Avatar, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

const ChatContent = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-current">
      <div className="flex gap-2 items-start">
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
        <Card className="max-w-[70%] px-2 py-1 bg-secondary flex gap-2 items-end relative">
          <p className="flex flex-wrap py-1"> Lorem ipsum dolor sit amet. </p>
          <span className="text-xs"> 11:00 </span>
        </Card>
      </div>
      <div className="flex gap-2 items-start justify-end">
        <Card className="max-w-[70%] px-2 py-1 bg-primary text-foreground flex gap-2 items-end relative">
          <p className="flex flex-wrap py-1"> Lorem ipsum dolor sit amet. </p>
          <span className="text-xs"> 11:00 </span>
        </Card>
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
      </div>
      <div className="flex gap-2 items-start justify-end">
        <div className="max-w-[70%] px-2 py-1 text-foreground flex gap-2 items-end relative">
          <img
            src="https://img.ibxk.com.br/2024/01/17/17113534532068.jpg?ims=328x"
            className="w-full h-[250px] object-cover rounded-lg"
          />
        </div>
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
      </div>
      <div className="flex gap-2 items-start">
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
        <Card className="max-w-[70%] px-2 py-1 bg-secondary flex gap-2 items-end relative">
          <p className="flex flex-wrap py-1"> Lorem ipsum dolor sit amet. </p>
          <span className="text-xs"> 11:00 </span>
        </Card>
      </div>
      <div className="flex gap-2 items-start">
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
        <Card className="max-w-[70%] px-2 py-1 bg-secondary flex gap-2 items-end relative">
          <p className="flex flex-wrap py-1"> Lorem ipsum dolor sit amet. </p>
          <span className="text-xs"> 11:00 </span>
        </Card>
      </div>
      <div className="flex gap-2 items-start">
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user" />
        </Avatar>
        <div className="max-w-[70%] px-2 py-1 text-foreground flex gap-2 items-end relative">
          <img
            src="https://img.ibxk.com.br/2024/01/17/17113534532068.jpg?ims=328x"
            className="w-full h-[250px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
