import { useChatContext } from "@/context/useChatContext";
import { useGlobalContext } from "@/context/useGlobalContext";
import { useEffect, useRef } from "react";
import { MessageImage, MessageText } from "./Messages";

const ChatContent = () => {
  const { chatData } = useChatContext();
  const { user } = useGlobalContext();

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (endRef.current) {
      (endRef.current as Element).scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  const convertDate = (time: Date) => {
    const date = new Date(time);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };

  return (
    chatData && (
      <div className="w-full flex-1 p-4 overflow-y-auto overflow-x-hidden flex flex-col gap-2 scrollbar-thin scrollbar-thumb-current">
        {chatData.messages.length > 0 ? (
          chatData.messages.map((message, index) => (
            <div
              className={`max-w-[80%] md:max-w-[70%] flex gap-1 items-start ${
                message.senderId === user?.uid ? "self-end" : null
              }`}
              key={index}
            >
              
              {message.type === "text" ? (
                <MessageText userId={user?.uid || ""} content={message.content} senderId={message.senderId} sendedAt={convertDate(message.sendedAt)} />
              ) : (
                <MessageImage 
                  userId={user?.uid || ""}
                  content={message.content}
                  senderId={message.senderId}
                  sendedAt={convertDate(message.sendedAt)}
                />
              )}
            </div>
          ))
        ) : (
          <div className="w-full mt-4 font-semibold h-full flex items-center justify-center">
            No messages sended already!
          </div>
        )}

        <div ref={endRef}></div>
      </div>
    )
  );
};

export default ChatContent;
