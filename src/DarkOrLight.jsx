import { useCallback, useState } from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";

export default function DarkOrLight(){
    const { theme, setTheme } = useState('light')
    const ToggleTheme = useCallback( () => {
        if(theme == "light"){
            setTheme('dark')
        }else if(theme == 'dark'){
            setTheme('light')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, ToggleTheme }}>
            <MainContext />
        </ThemeContext.Provider>
    )
}