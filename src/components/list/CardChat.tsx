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

  const convertDate = (time: unknown) => {
    const date = new Date(time as Date);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };

  return (
    <div
      className="relative w-full p-4 flex items-end justify-between group hover:bg-primary transition-colors duration-150 cursor-pointer"
      onClick={changeUserViewMessage}
    >
      <div className="flex items-center gap-3 max-w-[90%] overflow-hidden">
        <MyAvatar
          email={chat.receiverData?.email || ""}
          avatarUrl={chat.receiverData?.avatar}
        />
        <div className="max-w-[80%] overflow-hidden">
          <span className="text-foreground group-hover:text-white font-bold">
            {" "}
            {chat.receiverData?.username}{" "}
          </span>
          <p className="text-foreground/80 group-hover:text-white/80 w-full line-clamp-1">
            {chat.lastMessage}
          </p>
        </div>
      </div>

      <span className="text-sm text-foreground/60 group-hover:text-white/80">
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
