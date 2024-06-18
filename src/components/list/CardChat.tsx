import { ReceiverProps } from "@/types";
import { useChatContext } from "@/context/useChatContext";
import MyAvatar from "../MyAvatar";
import { updateViewMessage } from "@/lib/Firebase";
import { useGlobalContext } from "@/context/useGlobalContext";

const CardChat = ({ chat }: { chat: ReceiverProps }) => {
  const { setCurrentReceiver, setShowChatList } = useChatContext();
  const { user } = useGlobalContext();

  const changeUserViewMessage = () => {
    if (user) {
      updateViewMessage(chat.chatId, user?.uid);
      setCurrentReceiver(chat);
      setShowChatList(false)
    }
  };

  const convertDate = (time: Date) => {
    const date = new Date(time);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes}`;
  };

  return (
    <div
      className="relative w-full p-4 flex items-end justify-between group hover:bg-primary transition-colors duration-150 cursor-pointer"
      onClick={changeUserViewMessage}
    >
      <div className="flex items-center gap-3">
        <MyAvatar
          username={chat.receiverData?.username || ""}
          avatarUrl={chat.receiverData?.avatar}
        />
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

      <span className="text-sm text-black/60 group-hover:text-white/80">
        {convertDate(chat.updatedAt)}
      </span>

      {!chat.isSeen && chat.lastMessage !== "" && (
        <span className="absolute top-2 right-2 text-xs p-1 bg-primary rounded-sm text-white/80">
          New message
        </span>
      )}
    </div>
  );
};

export default CardChat;
