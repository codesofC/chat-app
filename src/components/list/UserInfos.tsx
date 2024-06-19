import { useGlobalContext } from "@/context/useGlobalContext";
import { Settings } from "lucide-react";
import MyAvatar from "../MyAvatar";
import MyPopOver from "../MyPopOver";
import { Button } from "../ui/button";
import { signout } from "@/lib/Firebase";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "@/context/useChatContext";

const UserInfos = () => {
  const { user } = useGlobalContext();
  const {setShowChatList, currentReceiver, showChatList} = useChatContext()

  const navigate = useNavigate()

  const deconnexionUser = () => {
    signout()
    .then(() => {
      navigate("/login")
    })
  }

  return (
    <div className="p-4 w-full flex items-center justify-between bg-primary">
      <div className="flex items-center gap-3">
        <MyAvatar avatarUrl={user?.avatar} username={user?.username || ""} avatarStyles="w-14 h-14" />
        <div className="flex flex-col">
          <span className="text-white font-bold"> { user?.username} </span>
        </div>
      </div>
      
      <MyPopOver popOverClassName={`z-20 ${!showChatList ? 'hidden sm:block' : 'block'}`} buttonOver={<Settings className="cursor-pointer text-white" />}>
        <Button className="w-full bg-transparent hover:bg-primary text-black hover:text-white sm:hidden" onClick={() => setShowChatList(!currentReceiver ? true : false)}> Close List </Button>
        <Button className="w-full bg-transparent hover:bg-primary text-black hover:text-white" onClick={deconnexionUser}> Logout </Button>
      </MyPopOver>
    </div>
  );
};

export default UserInfos;
