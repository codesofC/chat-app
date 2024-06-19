import { Card } from "../ui/card";
import { useChatContext } from "@/context/useChatContext";
import { useGlobalContext } from "@/context/useGlobalContext";
import { useEffect, useRef } from "react";

const ChatContent = () => {
  const { chatData } = useChatContext();
  const { user } = useGlobalContext();

  const endRef = useRef();

  useEffect(() => {
    if (endRef.current) {
      (endRef.current as Element).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });

  const convertDate = (time: Date) => {
    const date = new Date(time);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes}`;
  };

  return (
    chatData && (
      <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden flex flex-col gap-2 scrollbar-thin scrollbar-thumb-current">
        {chatData.messages.length > 0 ? (
          chatData.messages.map((message, index) => (
            <div
              className={`w-full flex gap-1 items-start ${
                message.senderId === user?.uid ? "flex-row-reverse" : null
              }`}
              key={index}
            >
              
              {message.type === "text" ? (
                <Card
                  className={`max-w-[80%] md:max-w-[70%] px-2 py-1 bg-secondary flex gap-2 items-end overflow-hidden ${
                    message.senderId === user?.uid && "bg-primary text-white"
                  }`}
                >
                  <p className="flex-1 flex-wrap">{message.content}</p>
                  <span className="text-xs">
                    {" "}
                    {convertDate(message.sendedAt)}{" "}
                  </span>
                </Card>
              ) : (
                <div
                  className={`relative max-w-[70%] text-foreground flex gap-2 items-end bg-black rounded-md overflow-hidden cursor-pointer`}
                >
                  <img
                    src={message.content}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="w-full h-full bg-[rgba(0,0,0,.2)] absolute top-0 bottom-0" />
                  <div
                    className={`text-xs absolute bottom-2 z-[1] ${
                      message.senderId === user?.uid ? "left-4" : "right-4"
                    } text-white`}
                  >
                    {" "}
                    {convertDate(message.sendedAt)}{" "}
                  </div>
                </div>
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
