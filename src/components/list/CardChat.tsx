import { Avatar, AvatarFallback } from "../ui/avatar";

const CardChat = ({ chat }) => {
  return (
    <div className="w-full p-4 flex items-center justify-between group hover:bg-primary transition-colors duration-150 cursor-pointer">
      <div className="flex items-center gap-3">
        <Avatar className="w-14 h-14">
          <AvatarFallback className="text-lg text-black font-bold">CJ</AvatarFallback>
        </Avatar>
        <div className="flex flex-col max-w-[70%]">
            <span className="text-black group-hover:text-white font-bold"> {chat.name} </span>
            <span className="text-black/80 group-hover:text-white/80 font-extralight line-clamp-1"> {chat.ultimeMessage} </span>
        </div>
      </div>

      <div className="relative items-center justify-center">
        <span className="text-sm text-black/60 group-hover:text-white/80"> {chat.createAt} </span>
        {/* <span className="text-sm px-2 py-1 bg-primary group-hover:bg-white rounded-full text-white/80 group-hover:text-black/60"> 1 </span> */}
      </div>
    </div>
  );
};

export default CardChat;
