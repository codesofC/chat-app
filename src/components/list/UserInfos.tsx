import { useGlobalContext } from "@/context/useGlobalContext";
import { Settings } from "lucide-react";
import MyAvatar from "../MyAvatar";

const UserInfos = () => {
  const { user } = useGlobalContext();

  return (
    <div className="p-4 w-full flex items-center justify-between bg-primary">
      <div className="flex items-center gap-3">
        <MyAvatar avatarUrl={user?.avatar} username={user?.username || ""} avatarStyles="w-14 h-14" />
        <div className="flex flex-col">
          <span className="text-white font-bold"> { user?.username} </span>
        </div>
      </div>
      <Settings className="cursor-pointer text-white" />
    </div>
  );
};

export default UserInfos;
