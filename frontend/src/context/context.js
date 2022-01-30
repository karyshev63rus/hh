import React, { useState, createContext } from 'react'
import useList from '../hooks/uselist'

const Context = createContext()

const BoundryContext = (props) => {
    
    const [ isLogin, setIsLogin ] = useState(Boolean(localStorage.getItem('id')))
    const id = localStorage.getItem('id')||''
    const { list } = useList(`users/profile/${id}`)

    const value = {
        isLogin, 
        setIsLogin,
        list,
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, BoundryContext }
