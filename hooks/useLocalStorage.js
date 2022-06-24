import { useEffect, useState } from 'react'

const PREFIX = 'nainglinnkhant-'

const useLocalStorage = (key, initialValue) => {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState('light')

    useEffect(() => {
        setValue(() => {
            const jsonData = localStorage.getItem(prefixedKey)

            if (jsonData !== null) return JSON.parse(jsonData)

            return initialValue
        })
    }, [prefixedKey])

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}

export default useLocalStorage
