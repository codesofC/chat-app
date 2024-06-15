import { Mic, SendHorizonal, Smile } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import PickerFile from "./PickerFile";
import { updateChatsData, updateUserChatsData, uploadFiles } from "@/lib/Firebase";
import { useGlobalContext } from "@/context/useGlobalContext";
import { useChatContext } from "@/context/useChatContext";

const FooterChat = () => {
  const [message, setMessage] = useState("");
  const [openEmojiePicker, setOpenEmojiePicker] = useState(false);

  const {user} = useGlobalContext()
  const { currentReceiver } = useChatContext()

  const handleEmojiePicker = (e: EmojiClickData) => {
    setMessage((prev) => prev + e.emoji);
    setOpenEmojiePicker(false);
  };

  const sendMessage = async () => {
    if(message === "") return

    if(user && currentReceiver){
      await updateChatsData(currentReceiver.chatId, user.uid, "text", message)

      updateUserChatsData(currentReceiver.chatId, [user.uid, currentReceiver.receiverId], message, "text")
      setMessage("")
    }

  }

  const sendMedia = async (file: File) => {
    const urlFile = await uploadFiles(file)
    if(urlFile){
      if(user && currentReceiver){
        await updateChatsData(currentReceiver.chatId, user.uid, "media", urlFile)
  
        updateUserChatsData(currentReceiver.chatId, [user.uid, currentReceiver.receiverId], urlFile, "media")
      }
    }
  }

  return (
    <Card className="flex gap-2 items-center p-2 mx-4 mb-4">
      <div className="relative">
        <Smile
          size={20}
          className="cursor-pointer"
          onClick={() => setOpenEmojiePicker((prevState) => !prevState)}
        />
        <div className="absolute left-0 bottom-10">
          <EmojiPicker
            open={openEmojiePicker}
            onEmojiClick={handleEmojiePicker}
          />
        </div>
      </div>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="type message"
        className="bg-transparent border-none flex-1 px-0"
      />
      <PickerFile sendMedia={sendMedia}/>
      <Mic size={20} className="cursor-pointer" />
      <Button className="p-2 bg-primary" onClick={sendMessage}>
        <SendHorizonal size={20} className="cursor-pointer" />
      </Button>
    </Card>
  );
};

export default FooterChat;
