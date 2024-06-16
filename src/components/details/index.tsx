import ChatSettings from "./ChatSettings";
import HeaderDetails from "./HeaderDetails";
import SharedPhotos from "./SharedPhotos";
import { useChatContext } from "@/context/useChatContext";

const Details = () => {
  const { currentReceiver} = useChatContext();
 


  return currentReceiver && currentReceiver.receiverData ? (
    <div className="flex-1 h-full bg-background hidden lg:flex flex-col pb-4 pt-24">
      <HeaderDetails username={currentReceiver.receiverData.username} avatarUrl={currentReceiver.receiverData.avatar} />

      <div className="p-4 flex-1 overflow-y-auto">
        <ChatSettings />
        <SharedPhotos />
      </div>
    </div>
  ) : (
    <div className="flex-1 h-full bg-background flex items-center justify-center font-semibold">
      No User Selected
    </div>
  );
};

export default Details;
