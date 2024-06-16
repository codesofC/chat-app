import MyAvatar from "../MyAvatar"


type HeaderDetailsData = {
  avatarUrl?: string,
  username: string
}

const HeaderDetails = ({username, avatarUrl}: HeaderDetailsData) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center px-4 pb-4 border-b border-foreground">
        <MyAvatar username={username} avatarUrl={avatarUrl} avatarStyles="w-24 h-24" />
        <div className="flex flex-col items-center">
            <span className="font-bold"> {username} </span>
        </div>
    </div>
  )
}

export default HeaderDetails