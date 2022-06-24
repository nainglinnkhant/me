import Image from 'next/image'
import { useTheme } from '../../context/ThemeContext'

export default function IconLink({ link, linkClass = '', icon, alt }) {
    const { theme } = useTheme()

    return (
        <a href={link} target='__blank' rel='noopener noreferrer' className={linkClass}>
            <Image
                src={icon}
                alt={alt}
                width='22px'
                height='22px'
                className={theme === 'light' ? 'icon-filter' : 'icon-filter-dark'}
            />
        </a>
    )
}
