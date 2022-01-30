import React from "react"
import { Link } from "react-router-dom"

const List = ({list}) => {

    return(
        list.map(({id, title, slug, text, image, url}) => 
        <div className='card news-list my-3' key={id}>
            <div className='row'>
                <div className='col-4'>
                    <img className='mt-3 ms-3' src={image} width='80%' alt='' />
                </div>
                <div className='card-body col-8'>
                    <Link className='card-link' to={`/news/${slug}`}>
                        <h3 className='news card-title my-3'>{title}</h3>
                    </Link>
                    <hr className='me-3'/>
                    <p className='card-text mx-2'>{text.slice(0,250)}...</p>
                    <p className='card-text'>
                        <small className="text-muted">
                            <a href={url} target='_blank' rel='noopener noreferrer' >Ссылка на источник</a>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    )

    )
}

export default List
