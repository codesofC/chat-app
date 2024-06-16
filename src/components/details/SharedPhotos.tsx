import { useChatContext } from "@/context/useChatContext";
import MyAccordion from "../MyAccordion";
import { Card } from "../ui/card";
import { Download } from "lucide-react";

const SharedPhotos = () => {
  const { chatData } = useChatContext();

  return (
    <MyAccordion title="Shared Medias">
      {chatData && chatData.messages.length > 0 ? (
        chatData.messages.map(
          (chat, index) =>
            chat.type === "media" && (
              <Card
                key={index}
                className="w-full flex items-center justify-between py-2 px-4 bg-transparent border-none shadow-none"
              >
                <div className="w-12 h-12 rounded-sm overflow-hidden bg-black">
                  <img
                    src={chat.content}
                    className="w-full h-full object-cover"
                  />
                </div>

                <a href={chat.content} target="_blank">
                  <Download />
                </a>
              </Card>
            )
        )
      ) : (
        <div className="text-center mt-4">No medias shared</div>
      )}
    </MyAccordion>
  );
};

export default SharedPhotos;
