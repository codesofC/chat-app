type MessagesProps = {
  content: string;
  senderId: string;
  sendedAt: string;
  userId: string;
};

export const MessageText = ({
  userId,
  content,
  senderId,
  sendedAt,
}: MessagesProps) => (
  <div
    className={`max-w-full relative px-2 py-1 flex gap-2 items-end rounded-xl text-white ${
      senderId === userId ? "bg-primary rounded-br-none" : "bg-muted-foreground rounded-bl-none"
    }`}
  >
    <p className="max-w-[95%] whitespace-normal text-wrap flex flex-wrap overflow-hidden">
      {content}
    </p>
    <span className="text-xs"> {sendedAt} </span>
  </div>
);

export const MessageImage = ({
  userId,
  content,
  senderId,
  sendedAt,
}: MessagesProps) => (
  <div
    className={`relative text-foreground flex gap-2 items-end bg-black rounded-md overflow-hidden cursor-pointer`}
  >
    <img src={content} className="w-full h-[250px] object-cover" />
    <div className="w-full h-full bg-[rgba(0,0,0,.2)] absolute top-0 bottom-0" />
    <div
      className={`flex text-xs absolute bottom-2 z-[1] ${
        senderId === userId ? "left-4" : "right-4"
      } text-white`}
    >
      {sendedAt}
    </div>
  </div>
);
