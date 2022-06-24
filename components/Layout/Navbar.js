import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import NavItem from '../Base/NavItem'
import styles from '../../styles/Navbar.module.css'
import ThemeToggleButton from '../Base/ThemeToggleButton'

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        setShowNavbar(true)
    }, [])

    const handleMobileMenuClick = () => {
        document.querySelector('.menu-btn').classList.toggle('open')
        setShowMobileMenu((prevState) => !prevState)
    }

    const closeMobileMenu = () => {
        document.querySelector('.menu-btn').classList.remove('open')
        setShowMobileMenu(false)
    }

    return (
        <CSSTransition in={showNavbar} timeout={600} classNames='fade-down' mountOnEnter>
            <nav className='fixed top-0 left-0 right-0 py-5 md:py-7 theme z-40'>
                <div className='container mx-auto px-8 lg:px-24 xl:px-32 2xl:px-56 flex justify-between'>
                    <div className='font-semibold text-lg'>
                        <Link href='/'>Naing Linn Khant</Link>
                    </div>

                    <div className='block md:hidden z-20'>
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

                                <NavItem path='/blog' closeMobileMenu={closeMobileMenu} mobile>
                                    <Link href='/blog'>Blog</Link>
                                </NavItem>

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
        </CSSTransition>
    )
}
