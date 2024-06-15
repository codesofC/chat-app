import { AvatarProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const MyAvatar = ({ username, avatarUrl, avatarStyles }: AvatarProps) => {
  return (
    <Avatar className={cn(avatarStyles || "w-10 h-10")}>
      {avatarUrl ? (
        <AvatarImage src={avatarUrl} />
      ) : (
        <AvatarFallback className="text-lg text-black font-bold">
          {username.charAt(0).toUpperCase()}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default MyAvatar;
