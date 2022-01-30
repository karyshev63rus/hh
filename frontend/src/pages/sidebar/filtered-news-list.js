import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useList from '../../hooks/uselist'
import NewsSideBar from './news-sidebar'
import Preloader from '../../components/preloader'
import List from '../../components/list'

const FilteredNewsList = () => {

    const { id } = useParams()

    const path = `?category=${id}`
    let { list, loading } = useList(path)
    
    return(
        <div className='container content'>
            <div className='row'>
                <div className='col-9'>
                    <Link className='btn btn-success' to='/create'>Добавить запись</Link>
                {
                    loading ? <Preloader /> : <List list={list}/>
                }
                </div>
                <div className='col-3'>
                    <NewsSideBar />
                </div>
            </div>
        </div>
    )
}

export default FilteredNewsList
