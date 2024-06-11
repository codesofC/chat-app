import { Camera, FileText, Headphones, Images, Paperclip } from "lucide-react";
import MyPopOver from "../MyPopOver";

const PickerFile = () => {
  return (
    <MyPopOver 
      popOverClassName="grid grid-cols-2 gap-2 items-center justify-center max-w-40 bg-popover"
      buttonOver={<Paperclip
        size={20}
        className="cursor-pointer"
      />}
    >
      <div className="py-4 rounded-full bg-primary text-white flex items-center justify-center">
        <Camera size={25} />
      </div>
      <div className="py-4 rounded-full bg-primary text-white flex items-center justify-center">
        <Images size={25} />
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
