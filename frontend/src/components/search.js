import React, { useState } from 'react'

const Search = ({ getSearchItem }) => {

    const [keyWords, setKeyWords] = useState('')

    const onSearchChange = (event) => {
        setKeyWords(event.target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        getSearchItem(keyWords)
        setKeyWords('')
    }

    return(
        <form className='d-flex mb-3' onSubmit={onSubmit}>
            <input
            className='form-control' 
            type='search'
            placeholder='Введите ключевые слова для поиска вакансий'
            value={keyWords}
            onChange={onSearchChange}
            />
            <button className='search-button btn btn-success' type='submit'>Поиск</button>
        </form>
    )
}

export default Search
