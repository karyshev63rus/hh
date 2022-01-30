import {useState, useEffect} from 'react'


const useVacanciesPage = (currentPage, searchItem) => {

    const [vacanciesPage, setVacanciesPage] = useState({'items': []})
    const [loading, setLoading] = useState(true)
    
    useEffect(
        () => {
            let page = currentPage
            let per_page = 10
            let search_item = searchItem
            fetch(`https://api.hh.ru/vacancies/?per_page=${per_page}&page=${page}&text=${search_item}`)
            .then(res => res.json())            
            .then(data => {
                setVacanciesPage(data)
                setLoading(false)
            })
            .catch(error => console.warn('Error is', error))
        }, [currentPage, searchItem]
        )
        return { vacanciesPage, loading }
    }
    
export default useVacanciesPage
