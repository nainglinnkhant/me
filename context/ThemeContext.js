import { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ThemeContext = createContext({
    theme: 'light',
    changeToLightTheme: () => {},
    changeToDarkTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

const MATCH_DARK = '(prefers-color-scheme: dark)'

export const ThemeProvider = ({ children }) => {
    const isDarkMode = matchMedia(MATCH_DARK).matches
    const systemTheme = isDarkMode ? 'dark' : 'light'
    const [theme, setTheme] = useLocalStorage('theme', systemTheme)

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
        document.documentElement.classList = ''
        document.documentElement.classList.add(newTheme)
    }

    // initialize theme with the system theme or the exisiting theme in the local storage
    useEffect(() => {
        changeTheme(theme)
    }, [])

    useEffect(() => {
        const handleThemeChange = (e) => {
            const changedTheme = e.matches ? 'dark' : 'light'
            changeTheme(changedTheme)
        }

        window.matchMedia(MATCH_DARK).addEventListener('change', handleThemeChange)

        return () => window.matchMedia(MATCH_DARK).removeEventListener('change', handleThemeChange)
    }, [])

    const contextValue = {
        theme,
        changeToLightTheme: () => changeTheme('light'),
        changeToDarkTheme: () => changeTheme('dark'),
    }

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
