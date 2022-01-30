import NextNProgress from 'nextjs-progressbar'
import { useTheme } from '../../context/ThemeContext'

export default function RouteProgress() {
     const { theme } = useTheme()

     return (
          <NextNProgress
               color={`${theme === 'light' ? 'rgb(55 65 81)' : 'rgb(209 213 219)'}`}
               options={{ showSpinner: false }}
          />
     )
}
