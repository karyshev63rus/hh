import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'

const Header = () => {

    const { isLogin } = useContext(Context)

    const email = localStorage.getItem('email')

    return(
        <div className='row g-0'>
            <div className='col-sm-5 col-lg-3'>
                <nav className='navbar navbar-expand navbar-dark bg-success'>
                    <Link className='navbar navbar-brand px-3' to='/'>HH Research</Link>
                </nav>
            </div>
            <div className='col-sm-7 col-lg-3'>
                <nav className='navbar navbar-expand navbar-dark bg-success'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>Инфо</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/news'>Ресурс</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/analytics'>Аналитика</Link>
                        </li>
                    </ul>
                    </nav>
            </div>
            <div className='col-sm-4 col-lg-3'>
                <nav className='profile-navbar bg-success d-flex'>
                    <Link className='login-logout username p-3' to='/'>
                        <i className='fas fa-user'></i>
                        {email}
                    </Link>
                </nav>
            </div>
            <div className='col-sm-8 col-lg-3'>
                <nav className='small-navbar navbar-expand navbar-dark bg-success d-flex'>
                    {isLogin ? 
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link login-logout p-3' to='/logout/'>
                                Выход
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link login-logout p-3' to='/profile/'>
                                Кабинет
                            </Link>
                        </li>
                    </ul>
                    :
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link login-logout p-3' to='/login/'>
                                Вход
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link login-logout p-3' to='/signup/'>
                                Регистрация
                            </Link>
                        </li>
                    </ul>
                    }
                </nav>
            </div>
            </div>
    )
}

export default Header
