import React from "react"
import { Link } from "react-router-dom"
import useList from "../../hooks/uselist"
import Preloader from "../../components/preloader"

const NewsSideBar = () => {

    const path = 'category/'

    const { list, isLoading } = useList(path)

    return(
        <div className='sidebar container'>
            <h2 className='mb-md-4'>Категории</h2>
            <hr className='mb-md-4'/>
            { 
                isLoading ? <Preloader /> :
                list.map(({ id, title }) =>
                    <div className='sidebar-item ms-md-5 mb-3 mb-md-5 ' key={ id }>
                        <Link to={`/news-category/${ id }`}>
                            <h4>{ title }</h4>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default NewsSideBar
