import React, { useState, useRef, useContext } from 'react'
import axiosInstance from '../services/instance'
import { Context } from '../context/context'
import { useHistory } from "react-router-dom"
import { getRefreshTokenData } from '../services/services'

const Login = () => {
    
    const { setIsLogin } = useContext(Context)
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const passwordRef = useRef(null)
    let stuff = { email, password }

    const handleSubmit = (event) => { 
        event.preventDefault()
        if ( password ) {
            axiosInstance.post('users/token/obtain/', 
            stuff
            ).then(
                result => {
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access
                    localStorage.setItem('access_token', result.data.access)
                    localStorage.setItem('refresh_token', result.data.refresh)
                    getRefreshTokenData()
                    history.push('/')
                }).catch(error => {
                    console.log('Error is: ', error)
                    history.push('/logout/')
                })
                .finally(
                    () => {
                        setIsLogin(true)
                        localStorage.setItem('email', email)
                    }
                )
            }
        }
    

    return(
        <div className='content'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <h3 className='my-3'>Login Page</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                        <label className='col-form-label'>
                                <input className='form-control mt-2'
                                    autoFocus={true}
                                    placeholder='email'
                                    type="text"
                                    value={email}
                                    onKeyPress={() => passwordRef.current.focus()}
                                    onChange={e => setEmail(e.target.value)}
                                    />
                            </label>
                            <label className='col-form-label'>
                                <input className='form-control mt-2'
                                    ref={passwordRef}
                                    placeholder='password'
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </label>
                            <button className='btn btn-success mt-4' type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
