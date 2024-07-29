import { Images, Mic, SendHorizonal, Smile } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
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

  const handleChangeFile = (fileToSend: File | null) => {
    if(!fileToSend) return

    sendMedia(fileToSend)
  }

  return currentReceiver && (
    <Card className="flex gap-2 items-center justify-between p-2 mx-4 mb-4 border-gray-200">
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
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="type message"
        className="bg-transparent flex-1 h-6 focus:outline-none resize-none px-1"
      />
      <div className="relative flex">
        <Images size={20} />
        <Input 
          type="file" 
          accept="image/png, image/jpeg, image/webp, image/jpg" 
          className="w-full h-full  cursor-pointer absolute opacity-0" 
          onChange={e => handleChangeFile(e.target.files ? e.target.files[0] : null)}
        />
      </div>
      <Mic size={20} className="cursor-pointer" />
      <Button className="p-2 bg-primary" onClick={sendMessage}>
        <SendHorizonal size={20} className="cursor-pointer" />
      </Button>
    </Card>
  )
};

export default FooterChat;
