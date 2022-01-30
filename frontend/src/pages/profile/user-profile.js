import React from 'react'
import { Link } from 'react-router-dom'
import ProfileForm from './update-profile'
import useList from '../../hooks/uselist'
import Preloader from '../../components/preloader'

const Profile = () => {

    const id = localStorage.getItem('id')
    const path = `?author=${id}`
    let { list, loading } = useList(path)

    return(
        <div className='container content'>
            <div className='row'>
                <div className='col-md-9 order-1 order-md-0'>
                    <div className='profile-body'>
                        <h3 className='profile-title'>Список публикаций пользователя</h3>
                        <hr/>
                        { loading ? <Preloader /> :
                            list.map(({ id, title, image, text, slug }) => 
                                <div className='card  my-3' key={id}>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img className='mt-3 ms-3' src={image} width='80%' alt='' />
                                        </div>
                                        <div className='col-10 card-body'>
                                        <div className='card-body'>
                                            <h5 className='profile card-title my-3'>
                                                {title}
                                            </h5>
                                            <div className='card-text'>
                                                {text.slice(0, 150)}...
                                            </div>
                                            <Link className='card-link' to={`/news/${slug}`}>
                                                <h5 className='news card-title my-3'>Перейти к статье</h5>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>    
                            )
                        }
                    </div>
                </div>
                <div className='col-md-3 order-0 order-md-1'>
                    <div className='profile-body'>
                        <h3 className='profile-title'>Профиль</h3>
                        <hr/>
                        <ProfileForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
