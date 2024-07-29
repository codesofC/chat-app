'use client'

import { useEffect, useState } from "react"
import { ThemeContext } from "./useTheme"


const ThemeProvider = ({children}:{children: React.ReactNode}) => {

    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      setTheme(mediaQuery.matches ? "dark" : "light")

    }, [])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider