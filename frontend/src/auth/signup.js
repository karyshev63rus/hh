import React, { useState, useRef, useContext } from 'react'
import { Context } from '../context/context'
import { useHistory } from "react-router-dom"
import axiosInstance from '../services/instance';
import { getRefreshTokenData } from '../services/services';

const Signup = () => {

    const { setIsLogin } = useContext(Context)
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    let stuff = { email, password }

    const handleSubmit = (event) => {
        event.preventDefault()
        if ( password ) {
            event.preventDefault()
            axiosInstance.post('users/create/',
            stuff
            ).then(
                result => {
                    console.log('Res is :', result.data)
                    localStorage.setItem('email', result.data.email)
                    login()
            }).catch(error => {
                console.log('Error is :', error)
                alert('Не удалось зарегистрироваться.')
                history.push('/signup/')
            })
        }
    }
    
    const login = () => {
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
            setIsLogin(true)
    }

    return(
        <div className='content'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <h3 className='my-3'>Signup Page</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <label className='col-form-label'>
                                <input className='form-control mt-2'
                                    autoFocus={true}
                                    ref={emailRef}
                                    placeholder='email'
                                    type="email"
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
                            <button className='btn btn-success mt-4' type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Signup
