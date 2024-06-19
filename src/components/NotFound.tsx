import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
        <img 
            src="/assets/notFound.png"
            alt="404 not found"
            className="w-1/5"
        />
        <Button onClick={() => navigate("/login")}>
            Back To Home
        </Button>
    </div>
  )
}

export default NotFound