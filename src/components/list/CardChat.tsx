import { ReceiverProps } from "@/types";
import { useChatContext } from "@/context/useChatContext";
import MyAvatar from "../MyAvatar";

const CardChat = ({ chat }: { chat: ReceiverProps }) => {

  const {setCurrentReceiver} = useChatContext()

  return (
    <div 
      className="w-full p-4 flex items-center justify-between group hover:bg-primary transition-colors duration-150 cursor-pointer"
      onClick={() => setCurrentReceiver(chat)}
    >
      <div className="flex items-center gap-3"
      >
        <MyAvatar username={chat.receiverData?.username || ""} avatarUrl={chat.receiverData?.avatar} />
        <div className="flex flex-col max-w-[70%]">
          <span className="text-black group-hover:text-white font-bold">
            {" "}
            {chat.receiverData?.username}{" "}
          </span>
          <span className="text-black/80 group-hover:text-white/80 font-extralight line-clamp-1">
            {" "}
            {chat.lastMessage}{" "}
          </span>
        </div>
      </div>

      <div className="relative items-center justify-center">
        <span className="text-sm text-black/60 group-hover:text-white/80">
          {" "}
          {'10/04'}{" "}
        </span>
        {/* <span className="text-sm px-2 py-1 bg-primary group-hover:bg-white rounded-full text-white/80 group-hover:text-black/60"> 1 </span> */}
      </div>
    </div>
  );
};

export default CardChat;
