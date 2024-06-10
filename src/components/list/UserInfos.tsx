import { Avatar, AvatarFallback } from "../ui/avatar";
import { Ellipsis } from "lucide-react";

const UserInfos = () => {

  return (
    <div className="p-4 w-full flex items-center justify-between bg-primary">
      <div className="flex items-center gap-3">
        <Avatar className="w-14 h-14">
          <AvatarFallback className="text-lg text-black font-bold">CJ</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <span className="text-white font-bold"> Cristooo Junior </span>
            <span className="text-white/80 font-extralight"> @cristooojr </span>
        </div>
      </div>
      <Ellipsis className="cursor-pointer text-white" />
    </div>
  );
};

export default UserInfos;
