import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { createNewChat, getUsersToAdd } from "@/lib/Firebase";
import { ReceiverProps, UserProps } from "@/types";
import { useGlobalContext } from "@/context/useGlobalContext";
import MyAvatar from "../MyAvatar";
import { Credenza, CredenzaContent, CredenzaTrigger } from "../ui/credenza";
import { useChatContext } from "@/context/useChatContext";


const AddNewChat = ({ allChatsData }: {allChatsData: ReceiverProps[]}) => {

  const [usersFounded, setUsersFounded] = useState<UserProps[]>([]);
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const { user } = useGlobalContext();
  const {setCurrentReceiver} = useChatContext()

  const handleSearch = async (username: string) => {
    const founded = await getUsersToAdd(username, user?.username || "");

    if (founded) {
      setUsersFounded(founded);
    }
  };

  const addChat = async (receiverUid: string) => {
    setIsPending(true)
    if (user) {
      const isChatExisted = allChatsData.find(chat => chat.receiverData?.uid === receiverUid);

      if(!isChatExisted){
        await createNewChat(user.uid, receiverUid);
      }else{
        setCurrentReceiver(isChatExisted)
      }

    }
    setOpen(false);
    setUsersFounded([]);
    
  };

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaTrigger asChild>
        <Button className="text-white bg-primary">
          New chat
        </Button>
      </CredenzaTrigger>
      <CredenzaContent className="md:max-w-[425px] px-6 mb-6 md:mb-0">
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
                    <Button type="submit"  onClick={() => addChat(user.uid)} disabled={isPending} className="disabled:bg-gray-300 disabled:text-black/50">
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
      </CredenzaContent>
    </Credenza>
  );
};

export default AddNewChat;
