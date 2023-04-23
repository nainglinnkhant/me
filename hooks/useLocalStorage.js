import { useEffect, useState } from 'react'

const PREFIX = 'nainglinnkhant-'

const useLocalStorage = (key, initialValue) => {
    const prefixedKey = PREFIX + key
    const jsonData = localStorage.getItem(prefixedKey)
    const existingData = jsonData && JSON.parse(jsonData)

    const [value, setValue] = useState(existingData ?? initialValue)

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}

export default useLocalStorage
