import React, {useEffect} from "react"
import { useParams, Redirect } from 'react-router' 
import { deleteItem } from "../../services/services"

const DeleteNews = () => {

    const path = ''
    const { slug } = useParams()
    
    useEffect(() => 
    deleteItem(path, slug), [slug]
    )
    return(
        <div>
            <Redirect to='/' />
        </div>
    )
}

export default DeleteNews
