import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggleButton() {
     const { theme, changeToLightTheme, changeToDarkTheme } = useTheme()

     return (
          <>
               {theme === 'light' && (
                    <button onClick={changeToDarkTheme}>
                         <i className='fas fa-moon'></i>
                    </button>
               )}
               {theme === 'dark' && (
                    <button onClick={changeToLightTheme}>
                         <i className='fas fa-sun'></i>
                    </button>
               )}
          </>
     )
}
