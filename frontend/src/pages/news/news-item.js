import React from 'react'
import { Link } from 'react-router-dom'
import useItem from '../../hooks/useitem'
import NewsSideBar from '../sidebar/news-sidebar'
import Preloader from '../../components/preloader'

const NewsItem = () => {

    const path = ''
    let { item, loading } = useItem(path)
    const { author, title, slug, text, image, created_at, url } = item

    return(
        <div className='container content'>
            <div className='row'>
                { localStorage.getItem('id') !== String(author) ? null :
                    <div className='col-9 d-flex justify-content-between'>
                    <Link className='btn btn-secondary' to={{pathname:`/update/${slug}`, data: {...item}}}>
                        Редактировать текст
                    </Link>
                    <Link className='btn btn-primary' to={{pathname:`/editimage/${slug}`, data: {...item}}}>
                        Добавить/изменить изображение
                    </Link>
                    <Link className='btn btn-danger px-5' to={`/delete/${slug}`}>
                        Удалить запись
                    </Link>
                </div>
                }
            </div>
            <div className='row'>
                <div className='col-md-9'>
                {
                    loading ? <Preloader /> :
                    <div className='card news-item my-3'>
                        <img src={image} width='25%' alt='' />
                        <div className='card-body'>
                        <h3 className='card-title my-3'>{title}</h3>
                        <h5 className='card-author'>{author} {created_at}</h5>
                        <hr/>
                        <p className='card-text mx-2'>{text}</p>
                        <p className="card-text"><small className="text-muted">
                            <a href={url} target='_blank' rel='noopener noreferrer' >Ссылка на источник</a>
                        </small></p>
                        </div>
                    </div>
                }
                </div>
                <div className='col-md-3'>
                    <NewsSideBar />
                </div>
            </div>
        </div>
    )
}

export default NewsItem
