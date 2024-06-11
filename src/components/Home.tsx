import { Card } from "./ui/card";
import Chat from "./chat";
import Details from "./details";
import List from "./list";

const Home = () => {
  return (
    <Card className="w-4/5 h-[90%] flex rounded-xl overflow-hidden">
      <List />
      <Chat />
      <Details />
    </Card>
  );
};

export default Home;
