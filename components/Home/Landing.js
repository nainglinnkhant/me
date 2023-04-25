import Image from 'next/image'
import { useTheme } from '../../context/ThemeContext'
import chevronsDown from '../../public/general/chevrons-down.svg'
import styles from '../../styles/Landing.module.css'

export default function Landing() {
    const { theme } = useTheme()

    return (
        <section
            className={`${styles.landing} relative flex flex-col justify-center items-start h-screen-90 w-full`}
        >
            <h1 className='mb-5'>Hello, My name is Naing Linn Khant.</h1>

            <h2 className='mb-5'>I build frontend stuffs.</h2>

            <p className='mb-7'>
                I'm a software developer, who loves to craft things with JavaScript, based in
                Yangon.
            </p>

            <a
                href='https://resume.io/r/6UrC226Gw'
                target='__blank'
                rel='noopener noreferrer'
                className='btn'
            >
                Resume
            </a>

            <div className={`${styles['chevrons-down']} self-center absolute bottom-0`}>
                <Image
                    src={chevronsDown}
                    alt='Chevrons down'
                    width='70px'
                    height='70px'
                    className={theme === 'dark' ? 'icon-filter-dark' : ''}
                />
            </div>
        </section>
    )
}
