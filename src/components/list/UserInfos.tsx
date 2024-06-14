import { useGlobalContext } from "@/context/useGlobalContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Settings } from "lucide-react";

const UserInfos = () => {
  const { user } = useGlobalContext();

  return (
    <div className="p-4 w-full flex items-center justify-between bg-primary">
      <div className="flex items-center gap-3">
        <Avatar className="w-14 h-14">
          {user?.avatar ? (
            <AvatarImage src={user?.avatar} />
          ) : (
            <AvatarFallback className="text-lg text-black font-bold">
              {user?.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col">
          <span className="text-white font-bold"> { user?.username} </span>
        </div>
      </div>
      <Settings className="cursor-pointer text-white" />
    </div>
  );
};

export default UserInfos;
