import { ReceiverProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CardChat = ({ chat }: { chat: ReceiverProps }) => {
  return (
    <div className="w-full p-4 flex items-center justify-between group hover:bg-primary transition-colors duration-150 cursor-pointer">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          {chat.receiverData?.avatar ? (
            <AvatarImage src={chat.receiverData?.avatar} />
          ) : (
            <AvatarFallback className="text-lg text-black font-bold">
              {chat.receiverData?.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
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
