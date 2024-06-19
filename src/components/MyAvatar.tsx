import { AvatarProps } from "@/types";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const MyAvatar = ({ username, avatarUrl, avatarStyles }: AvatarProps) => {
  return (
    <Avatar className={cn(avatarStyles || "w-10 h-10")}>
      {avatarUrl ? (
        <AvatarImage src={avatarUrl} />
      ) : (
        <AvatarImage src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${username}`} />
      )}
    </Avatar>
  );
};

export default MyAvatar;
