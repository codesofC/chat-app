import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/login"
import NotFound from "./components/NotFound"
import { useTheme } from "./context/theme/useTheme"
import { cn } from "./lib/utils"



function App() {

  const {theme} = useTheme()

  return (
    <div className={cn("w-screen h-[100vh] flex items-center justify-center bg-background", theme)}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
