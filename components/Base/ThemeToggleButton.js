import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggleButton() {
    const { theme, changeToLightTheme, changeToDarkTheme } = useTheme()

    return (
        <>
            {theme === 'light' && (
                <button onClick={changeToDarkTheme} aria-label='Switch to dark theme'>
                    <i className='fas fa-moon'></i>
                </button>
            )}
            {theme === 'dark' && (
                <button onClick={changeToLightTheme} aria-label='Switch to light theme'>
                    <i className='fas fa-sun'></i>
                </button>
            )}
        </>
    )
}
