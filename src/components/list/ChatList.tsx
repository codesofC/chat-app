import { Search } from "lucide-react";
import { Input } from "../ui/input";
import CardChat from "./CardChat";

const ChatList = () => {
  const users = [
    {
      name: "Jonh Doe",
      ultimeMessage: "Acabo de fazer o que tú estava esperando",
      createAt: "05/06",
    },
    {
      name: "Jonh Doe",
      ultimeMessage: "Acabo de fazer o que tú estava esperando",
      createAt: "05/06",
    },
    {
      name: "Jonh Doe",
      ultimeMessage: "Acabo de fazer o que tú estava esperando",
      createAt: "05/06",
    },
    {
      name: "Jonh Doe",
      ultimeMessage: "Acabo de fazer o que tú estava esperando",
      createAt: "05/06",
    },
  ];

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="mx-4 my-4 flex items-center border rounded-md gap-2 px-2">
        <Input
          placeholder="Search conversation"
          className="border-none w-full"
        />
        <Search color="gray" className="cursor-pointer" />
      </div>
      <div className="flex flex-col divide-y">
        {users.map((chat, index) => (
          <CardChat chat={chat} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
