import { UserRoundX } from "lucide-react";
import { Button } from "../ui/button";
import ChatSettings from "./ChatSettings";
import HeaderDetails from "./HeaderDetails";
import SharedFiles from "./SharedFiles";
import SharedPhotos from "./SharedPhotos";
import { signout } from "@/lib/Firebase";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "@/context/useChatContext";

const Details = () => {
  const { currentReceiver } = useChatContext();

  const navigate = useNavigate();

  const logout = async () => {
    await signout().then(() => {
      navigate("/login");
    });
  };

  return currentReceiver && currentReceiver.receiverData ? (
    <div className="flex-1 h-full bg-background flex flex-col py-4">
      <HeaderDetails username={currentReceiver.receiverData.username} avatarUrl={currentReceiver.receiverData.avatar} />

      <div className="p-4 flex-1 overflow-y-auto">
        <ChatSettings />
        <ChatSettings />
        <SharedPhotos />
        <SharedFiles />
      </div>

      <Button
        onClick={logout}
        className="mx-8 flex items-center gap-2 bg-red-600"
      >
        <UserRoundX />
        <span className="text-lg font-semibold"> Block User </span>
      </Button>
    </div>
  ) : (
    <div className="flex-1 h-full bg-background flex items-center justify-center font-semibold">
      No User Selected
    </div>
  );
};

export default Details;
