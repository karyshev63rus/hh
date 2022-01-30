import React from 'react'


const Pagination = ({page, pages, changePage}) => {

    return(
        <div className='pagination justify-content-center'>
        { page + 1 !== 1 ?                 
            <button className='pagination-backward btn btn-success' onClick={() => changePage(-1)}>Назад</button>
        : 
            <button className='pagination-backward btn btn-success' onClick={() => changePage(0)}>Назад</button>
        }
        <span className='pages justify-content-center'>{page + 1} из {pages}</span> 
        { page + 1 < pages ?
            <button className='pagination-forward btn btn-success' onClick={() => changePage(1)}>Вперед</button>   
        :
            <button className='pagination-forward btn btn-success' onClick={() => changePage(0)}>Вперед</button>   
        }
        </div> 
    )
}

export default Pagination
