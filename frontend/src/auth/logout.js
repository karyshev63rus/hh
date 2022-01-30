import React, { useEffect, useContext} from 'react'
import axiosInstance from '../services/instance'
import { Context } from '../context/context'
import { Redirect } from 'react-router' 

const Logout = () => {

    const { setIsLogin } = useContext(Context)

    useEffect(
        () => {
            axiosInstance.post('users/blacklist/', {
                'refresh_token': localStorage.getItem('refresh_token')
            }).catch(error => console.log('Error is :', error)
            ).finally(
                () => {
                    axiosInstance.defaults.headers['Authorization'] = null
                    localStorage.clear()
                    setIsLogin(false)
                }
            )
        }, [setIsLogin]) 

    return(
        <div>
            <Redirect to='/login/' />
        </div>
    )
}

export default Logout
