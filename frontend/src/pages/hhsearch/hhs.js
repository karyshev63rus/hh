import React, { useState } from 'react'
import Search from '../../components/search'
import HhsList from './hhslist'
import Pagination from '../../components/pagination'
import useVacanciesPage from '../../hooks/usevacanciespage'
import Preloader from '../../components/preloader';


const Home = () => {

    const [currentPage, setPage] = useState(0)
    const [searchItem, setSearchItem] = useState('python+спб')

    const changePage = (arg) => {
        window.scrollTo(0, 0)
        return setPage(currentPage => currentPage + arg)
    }

    const getSearchItem = (keyWords) => {
        let keyString = keyWords.split(' ').filter(item => item !== '').join('+')
        setSearchItem(keyString)
    }

    const { vacanciesPage, loading } = useVacanciesPage(currentPage, searchItem)

    const { items, page, pages } = vacanciesPage

    return (
        <div className='content'>
            {
                loading ? <Preloader /> :
                    <div>
                        <Search getSearchItem={getSearchItem} />
                        <HhsList vacancies={items} />
                        <Pagination page={page} pages={pages} changePage={changePage} />
                    </div>
            }
        </div>
    )
}

export default Home
