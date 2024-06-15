import { Camera, FileText, Headphones, Images, Paperclip } from "lucide-react";
import MyPopOver from "../MyPopOver";
import { Input } from "../ui/input";
import { useState } from "react";

const PickerFile = ({ sendMedia }: {sendMedia: (file: File) => Promise<void>}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleChangeFile = (fileToSend: File | null) => {
    if(!fileToSend) return

    sendMedia(fileToSend)
    setIsOpen(false)
  }

  return (
    <MyPopOver 
      popOverClassName="grid grid-cols-2 gap-2 items-center justify-center max-w-40 bg-popover"
      buttonOver={<Paperclip
        size={20}
        className="cursor-pointer"
      />}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className="py-4 rounded-full bg-primary text-white flex items-center justify-center">
        <Camera size={25} />
      </div>
      <div className="relative py-4 rounded-full bg-primary text-white flex items-center justify-center">
        <Images size={25} />
        <Input 
          type="file" 
          accept="image/png, image/jpeg, image/webp, image/jpg" 
          className="w-full h-full  cursor-pointer absolute opacity-0" 
          onChange={e => handleChangeFile(e.target.files ? e.target.files[0] : null)}
        />
      </div>
      <div className="py-4 rounded-full bg-primary text-white flex items-center justify-center">
        <FileText size={25} />
      </div>
      <div className="py-4 rounded-full bg-primary text-white flex items-center justify-center">
        <Headphones size={25} />
      </div>
    </MyPopOver>
  );
};

export default PickerFile;
