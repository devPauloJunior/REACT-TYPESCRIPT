import { ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
    children : ReactNode
}

const init : {theme? : string, toogleTheme?: () => void} = {}

export const ThemeContext = createContext(init)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light')

    const toogleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return ( 
        <ThemeContext.Provider value={{ theme, toogleTheme }}>{ children }</ThemeContext.Provider>
    )
}