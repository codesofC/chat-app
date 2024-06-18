import ChatSettings from "./ChatSettings";
import HeaderDetails from "./HeaderDetails";
import SharedPhotos from "./SharedPhotos";
import { useChatContext } from "@/context/useChatContext";
import { X } from "lucide-react";

const Details = () => {
  const { currentReceiver, showDetails, setShowDetails} = useChatContext();
 


  return currentReceiver && currentReceiver.receiverData ? (
    <div className={`relative flex-1 h-full bg-background ${showDetails ? 'flex z-10' : 'hidden lg:flex'} flex-col pb-4 pt-24`}>
      <HeaderDetails username={currentReceiver.receiverData.username} avatarUrl={currentReceiver.receiverData.avatar} />

      <div className="p-4 flex-1 overflow-y-auto">
        <ChatSettings />
        <SharedPhotos />
      </div>
      <X className="absolute top-4 right-4 cursor-pointer" onClick={() => setShowDetails(false)} />
    </div>
  ) : (
    <div className="flex-1 h-full bg-background flex items-center justify-center font-semibold">
      No User Selected
    </div>
  );
};

export default Details;
