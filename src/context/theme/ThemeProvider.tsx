'use client'

import { useState } from "react"
import { ThemeContext } from "./useTheme"


const ThemeProvider = ({children}:{children: React.ReactNode}) => {

    const [theme, setTheme] = useState<"light" | "dark">("light")


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider