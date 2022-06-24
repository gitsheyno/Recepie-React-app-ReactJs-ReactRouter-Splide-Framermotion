import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const [width, setWidth] = useState({
        width: undefined
    })
    useEffect(() => {
        const updateWidth = () => {
            setWidth({
                width: window.innerWidth
            })
        }

        updateWidth()

        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    return width
}

export default useWindowSize