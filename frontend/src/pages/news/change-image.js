import React, { useState } from "react"
import { updateItem } from "../../services/services"
import { useHistory } from 'react-router-dom'

const ChangeImage = (props) => {

    const { ...item } = props.location.data
    let history = useHistory()
    const [ image, setImage ] = useState(null)
    const path = ''

    const handleSubmit = (event) => {
        const stuff = new FormData()
        stuff.append('title', item.title)
        stuff.append('image', image)
        stuff.append('slug', item.slug)
        stuff.append('author', item.author)
        event.preventDefault()
        updateItem(path, item.slug, stuff)
        history.push(`/news/${item.slug}`)
}

    return(
        <div className='content'>
            <h3 className='mb-2'>Смена изображения</h3>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                <label className='col-form-label'>
                    <input className='form-control mt-2'
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                </label>
                <button className='btn btn-success btn-lg mt-3' type="submit">
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default ChangeImage
