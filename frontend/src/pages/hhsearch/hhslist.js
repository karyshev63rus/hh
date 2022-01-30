import React from 'react'
import HhsItem from './hhsitem'


const HhsList = ({ vacancies }) => {

    return(
        <ul className='hhs list'>
            {
                vacancies.map(vacancy => {
                    return <li key={ vacancy.id }>
                                <HhsItem vacancy={ vacancy }/>
                            </li>
                })
            }
        </ul>
    )
}

export default HhsList
