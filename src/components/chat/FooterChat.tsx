import { Mic, SendHorizonal, Smile } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import PickerFile from "./PickerFile";

const FooterChat = () => {
  const [message, setMessage] = useState("");
  const [openEmojiePicker, setOpenEmojiePicker] = useState(false);

  const handleEmojiePicker = (e: EmojiClickData) => {
    setMessage((prev) => prev + e.emoji);
    setOpenEmojiePicker(false);
  };

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
      <PickerFile />
      <Mic size={20} className="cursor-pointer" />
      <Button className="p-2 bg-primary">
        <SendHorizonal size={20} className="cursor-pointer" />
      </Button>
    </Card>
  );
};

export default FooterChat;
