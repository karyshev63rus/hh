import { useState, useEffect } from 'react'
import { getUser } from '../services/services'

const useProfile = (path) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            getUser(setUser, setLoading, path)
        },[path]
    )

    localStorage.setItem('firs_name', user.first_name)
    localStorage.setItem('last_name', user.last_name)
    localStorage.setItem('email', user.email)
    localStorage.setItem('birth_date', user.birth_date)
    localStorage.setItem('location', user.location)
    localStorage.setItem('bio', user.bio)
    localStorage.setItem('id', user.id)

    return { user, loading }
}

export default useProfile