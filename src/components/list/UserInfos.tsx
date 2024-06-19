import { useGlobalContext } from "@/context/useGlobalContext";
import { Settings } from "lucide-react";
import MyAvatar from "../MyAvatar";
import MyPopOver from "../MyPopOver";
import { Button } from "../ui/button";
import { signout, updateYourAvatar, uploadFiles } from "@/lib/Firebase";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "@/context/useChatContext";
import { Input } from "../ui/input";
import { ChangeEvent } from "react";

const UserInfos = () => {
  const { user, sessionId } = useGlobalContext();
  const { setShowChatList, currentReceiver, showChatList } = useChatContext();

  const navigate = useNavigate();

  const deconnexionUser = () => {
    signout().then(() => {
      navigate("/login");
    });
  };

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if(!files) return

    const url = await uploadFiles(files[0])
    if(url){
      await updateYourAvatar(sessionId, url);
    }
  };

  return (
    <div className="p-4 w-full flex items-center justify-between bg-primary">
      <div className="flex items-center gap-3">
        <div className="relative cursor-pointer">
          <MyAvatar
            avatarUrl={user?.avatar}
            email={user?.email || ""}
            avatarStyles="w-14 h-14"
          />
          <Input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/jpeg, image/webp, image/jpg"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
            onChange={handleFile}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold"> {user?.username} </span>
        </div>
      </div>

      <MyPopOver
        popOverClassName={`z-20 ${!showChatList ? "hidden sm:block" : "block"}`}
        buttonOver={<Settings className="cursor-pointer text-white" />}
      >
        <Button
          className="w-full bg-transparent hover:bg-primary text-black hover:text-white sm:hidden"
          onClick={() => setShowChatList(!currentReceiver ? true : false)}
        >
          {" "}
          Close List{" "}
        </Button>
        <Button
          className="w-full bg-transparent hover:bg-primary text-black hover:text-white"
          onClick={deconnexionUser}
        >
          {" "}
          Logout{" "}
        </Button>
      </MyPopOver>
    </div>
  );
};

export default UserInfos;
