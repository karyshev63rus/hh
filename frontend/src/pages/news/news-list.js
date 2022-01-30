import React from 'react'
import { Link } from 'react-router-dom'
import useList from '../../hooks/uselist'
import NewsSideBar from '../sidebar/news-sidebar'
import Preloader from '../../components/preloader'
import List from '../../components/list'

const NewsList = () => {

    const path = ''
    let { list, loading } = useList(path)
    
    return(
        <div className='container content'>
            <div className='row'>
                <div className='col-md-9 order-1 order-md-0'>
                { !localStorage.getItem('id') ? null :
                    <Link className='btn btn-success' to='/create'>Добавить запись</Link>
                }
                {
                    loading ? <Preloader /> : <List list={list}/>
                }
                </div>
                <div className='col-md-3 order-0 order-md-1'>
                    <NewsSideBar />
                </div>
            </div>
        </div>
    )
}

export default NewsList
