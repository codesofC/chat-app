import ChatList from "./ChatList"
import UserInfos from "./UserInfos"


const List = () => {
  return (
    <div className="flex-1 bg-background">
      <UserInfos />
      <ChatList />
    </div>
  )
}

export default List