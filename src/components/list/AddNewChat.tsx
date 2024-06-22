import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { useState } from "react";
import { createNewChat, getUsersToAdd } from "@/lib/Firebase";
import { UserProps } from "@/types";
import { useGlobalContext } from "@/context/useGlobalContext";
import MyAvatar from "../MyAvatar";

const AddNewChat = () => {
  const [usersFounded, setUsersFounded] = useState<UserProps[]>([]);
  const [open, setOpen] = useState(false);

  const { user } = useGlobalContext();

  const handleSearch = async (username: string) => {
    const founded = await getUsersToAdd(username, user?.username || "");

    if (founded) {
      setUsersFounded(founded);
    }
  };

  const addChat = async (receverUid: string) => {
    if (user) {
      await createNewChat(user?.uid, receverUid);
    }
    setOpen(false);
    setUsersFounded([]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-secondary-foreground bg-transparent hover:bg-transparent">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-secondary">
        <div className="flex flex-col py-4 gap-4">
          <div className="w-full">
            <Input
              id="username"
              placeholder="Username"
              className="w-full text-secondary-foreground"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 text-secondary-foreground">
            <h3 className="text-sm font-bold"> Users found: </h3>
            <div>
              {usersFounded.length > 0 ? (
                usersFounded.map((user) => (
                  <div
                    key={user.uid}
                    className="w-full flex items-center justify-between border-b py-2"
                  >
                    <div className="flex items-center gap-2">
                      <MyAvatar
                        avatarUrl={user.avatar}
                        email={user.email}
                        avatarStyles="w-10 h-10"
                      />
                      <span className="font-semibold"> {user.username} </span>
                    </div>
                    <Button type="submit" onClick={() => addChat(user.uid)}>
                      Start
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center mt-4 font-semibold">
                  Not user found
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewChat;
