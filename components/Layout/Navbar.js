import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import GitHubAvatar from '../Base/GithubAvatar'
import NavItem from '../Base/NavItem'
import ThemeToggleButton from '../Base/ThemeToggleButton'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [avatar, setAvatar] = useState('')

    const handleMobileMenuClick = () => {
        document.querySelector('.menu-btn').classList.toggle('open')
        setShowMobileMenu((prevState) => !prevState)
    }

    const closeMobileMenu = () => {
        document.querySelector('.menu-btn').classList.remove('open')
        setShowMobileMenu(false)
    }

    useEffect(() => {
        const getGitHubProfile = async () => {
            try {
                const res = await fetch('https://api.github.com/users/nainglinnkhant')
                if (!res.ok) {
                    throw new Error(res.message)
                }

                const data = await res.json()
                setAvatar(data.avatar_url)
            } catch (err) {
                setAvatar('https://avatars.githubusercontent.com/u/76158995?v=4')
            }
        }

        getGitHubProfile()
    }, [])

    return (
        <nav className='fixed top-0 left-0 right-0 py-5 md:py-7 theme z-40'>
            <div className='container mx-auto px-8 lg:px-24 xl:px-32 2xl:px-56 flex justify-between'>
                <GitHubAvatar avatar={avatar} />

                <div className={`${styles['menu-btn']} block md:hidden z-20 mt-[5px]`}>
                    <div className='menu-btn' onClick={handleMobileMenuClick}>
                        <div className='menu-btn__burger dark:bg-gray-200 dark:before:bg-gray-200 dark:after:bg-gray-200'></div>
                    </div>
                </div>

                <CSSTransition
                    in={showMobileMenu}
                    timeout={400}
                    classNames='slide-in'
                    mountOnEnter
                    unmountOnExit
                >
                    <nav
                        className={`${styles['menu-mobile']} theme absolute top-0 right-0 bottom-0 left-0 w-100 h-screen z-10`}
                    >
                        <ul className='text-center pt-40'>
                            <NavItem path='/' closeMobileMenu={closeMobileMenu} mobile>
                                <Link href='/'>Home</Link>
                            </NavItem>

                            <NavItem path='/projects' closeMobileMenu={closeMobileMenu} mobile>
                                <Link href='/projects'>Projects</Link>
                            </NavItem>

                            {/* <NavItem path='/blog' closeMobileMenu={closeMobileMenu} mobile>
                                <Link href='/blog'>Blog</Link>
                            </NavItem> */}

                            <li>
                                <ThemeToggleButton />
                            </li>
                        </ul>
                    </nav>
                </CSSTransition>

                <ul className={`${styles['menu-large']} hidden md:block`}>
                    <NavItem path='/'>
                        <Link href='/'>Home</Link>
                    </NavItem>

                    <NavItem path='/projects'>
                        <Link href='/projects'>Projects</Link>
                    </NavItem>

                    {/* <NavItem path='/blog'>
                        <Link href='/blog'>Blog</Link>
                    </NavItem> */}

                    <li>
                        <ThemeToggleButton />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
