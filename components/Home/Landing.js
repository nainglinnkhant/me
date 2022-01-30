import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import { useTheme } from '../../context/ThemeContext'
import chevronsDown from '../../public/general/chevrons-down.svg'
import styles from '../../styles/Landing.module.css'

export default function Landing() {
     const { theme } = useTheme()
     const [showContent, setShowContent] = useState(false)

     useEffect(() => {
          setShowContent(true)
     }, [])

     return (
          <div
               className={`${styles.landing} relative flex flex-col justify-center items-start h-screen-90 w-full`}
          >
               <CSSTransition in={showContent} timeout={600} classNames='fade-up' mountOnEnter>
                    <h1 className='mb-5'>Hello, My name is Naing Linn Khant.</h1>
               </CSSTransition>

               <CSSTransition in={showContent} timeout={600} classNames='fade-up' mountOnEnter>
                    <h2 className='mb-5'>I build web related things.</h2>
               </CSSTransition>

               <CSSTransition in={showContent} timeout={600} classNames='fade-up' mountOnEnter>
                    <p className='mb-7'>
                         I'm a web developer, who loves to craft things with JavaScript, based in
                         Yangon.
                    </p>
               </CSSTransition>

               <CSSTransition in={showContent} timeout={600} classNames='fade-up' mountOnEnter>
                    <a
                         href='https://resume.io/r/6UrC226Gw'
                         target='__blank'
                         rel='noopener noreferrer'
                         className='btn'
                    >
                         Resume
                    </a>
               </CSSTransition>

               <div className={`${styles['chevrons-down']} self-center absolute bottom-0`}>
                    <Image
                         src={chevronsDown}
                         alt='Chevrons down'
                         width='70px'
                         height='70px'
                         className={theme === 'dark' ? 'icon-filter-dark' : ''}
                    />
               </div>
          </div>
     )
}
