import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from '../context/ThemeContext'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import RouteProgress from '../components/UI/RouteProgress'
import Spinner from '../components/UI/Spinner'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const [showSpinner, setShowSpinner] = useState(true)

    useEffect(() => {
        const handleHideSpinner = () => setShowSpinner(false)

        window.addEventListener('load', handleHideSpinner)

        return () => window.removeEventListener('load', handleHideSpinner)
    }, [])

    useEffect(() => {
        if (document.readyState === 'complete') setShowSpinner(false)
    }, [])

    useEffect(() => {
        Aos.init({ duration: 600, once: true, easing: 'ease-out', offset: 200 })
    }, [])

    return (
        <>
            {!showSpinner && (
                <ThemeProvider>
                    <RouteProgress />
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            )}

            {showSpinner && <Spinner />}
        </>
    )
}

export default MyApp
