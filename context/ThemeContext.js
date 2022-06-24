import { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ThemeContext = createContext({
    theme: 'light',
    changeToLightTheme: () => {},
    changeToDarkTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')

    useEffect(() => {
        if (
            theme === 'dark' ||
            (!('nainglinnkhant-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const contextValue = {
        theme,
        changeToLightTheme: () => setTheme('light'),
        changeToDarkTheme: () => setTheme('dark'),
    }

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
