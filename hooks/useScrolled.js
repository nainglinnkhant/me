import { useCallback, useEffect, useState } from 'react'

const useScrolled = () => {
    const [scrolled, setScrolled] = useState(0)

    const handleProgressOnScroll = useCallback(() => {
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop

        const windowHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolledAmount = `${(windowScroll / windowHeight) * 100}%`
        setScrolled(scrolledAmount)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleProgressOnScroll)

        return () => window.removeEventListener('scroll', handleProgressOnScroll)
    }, [handleProgressOnScroll])

    return { scrolled }
}

export default useScrolled
