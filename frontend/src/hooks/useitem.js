import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItems } from '../services/services'

const useItem = (path) => {

    const [ item, setItem ] = useState([])
    const [loading, setLoading] = useState(true)
    const { slug } = useParams()

    useEffect(
        () => {
            getItems(setItem, setLoading, path, slug)
        }, [path, slug]
    )
    return { item, loading }
}

export default useItem
