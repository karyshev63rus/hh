import React from 'react'


const Logo = ({ employer }) => {

    return<>
    {
        employer.logo_urls !== null & employer.logo_urls !== undefined ? 
            <img src={employer.logo_urls.original} 
                className="card-img-top m-3" alt="..." 
            />
        : <div></div>
    }
        </>
}


const Salary = ({ salary }) => {

    return <>
    { 
        salary ?
            <p className='card-text'>
                <strong>Зарплата: </strong> 
                    { salary.from ? `от ${salary.from} ` : null} 
                    { salary.to ? `до ${salary.to} ` : null}
                    { salary.currency ? salary.currency : null}
            </p>
        : <p className='card-text'><strong>Зарплата не указана</strong></p>
    }
        </>
}


const cleanText = (text) => {
    const regText = /(<.*?>+)/ig
    if (text !== null) {
        return text.replace(regText, '')
    }
    return 'информация работодателем не указана' 
}


const Card = ({ employer, name, snippet, salary, alternate_url }) => {

    return(
        <div className='card-body'>
                
        <h5 className='card-title employer mb-3'>
            
            <a href={ employer.alternate_url } target='_blank' rel="noreferrer">
                { employer.name }
            </a>
            <hr/>
        </h5>

        <h3 className='card-title mb-3'>{ name }</h3>
        
        <p className='card-text'>
            <strong>Требования: </strong>{ cleanText(snippet.requirement) }</p>
        
        <p className='card-text'>
            <strong>Обязанности: </strong>{ cleanText(snippet.responsibility) }</p>

            <Salary salary={ salary }/>

        <a href={ alternate_url } target='_blank' rel="noreferrer" className='card-link'>
            Смотреть вакансию на hh.ru
        </a>
    
    </div>
    )
}


const HhsItem = ({ vacancy }) => {

    const { employer } = vacancy
    
    return(
        <div className='card my-3'>

            <div className='row'>

                <div className='col-md-4'>

                    <Logo employer={ employer }/>
                
                </div>

                <div className='col-md-8'>

                    <Card { ...vacancy }/>

                </div>

            </div>

        </div>
    )
}

export default HhsItem
