import { useState, useEffect } from 'react'
import { getItems } from '../services/services'

const useList = (path) => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            getItems(setList, setLoading, path)
        }, [path]
        )
    return { list, loading }
}

export default useList
