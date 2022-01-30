import React, { useState, useRef, useContext } from "react"
import { useHistory } from "react-router-dom"
import { updateItem } from "../../services/services"
import { Context } from "../../context/context"

const UpdateNews = (props) => {

    const path = ''
    const [isReady, setIsReady] = useState(false)
    let history = useHistory()
    
    const { ...item } = props.location.data
    const { id, first_name } = useContext(Context)
    const [ text, setText ] = useState(item.text)
    
    const buttonRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const stuff = new FormData()
        stuff.append('title', item.title)
        stuff.append('author', id)
        stuff.append('text', text)
        stuff.append('slug', item.slug)
        if (isReady) {
            event.preventDefault()
            updateItem(path, item.slug, stuff)
            history.push(`/news/`)
        }
    }        

    const handleButtonRef = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            setIsReady(true)
            buttonRef.current.focus()
        }
    }

    return(
        <div className='content'>
        <h3 className='mb-2'>Редактирование записи пользователя {`${first_name}`}</h3>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                <label className='col-form-label'>
                        <input className='form-control mt-2'
                            placeholder='title'
                            disabled
                        />
                    </label>
                    <label className='col-form-label'>
                        <textarea className='form-control mt-2'
                            autoFocus={true}
                            placeholder='text'
                            type="text"
                            rows='7'
                            aria-multiline={true}                            value={text}
                            onKeyPress={handleButtonRef}
                            onChange={e => setText(e.target.value)}
                        />
                    </label>
                    <button className='btn btn-success btn-lg mt-3' ref={buttonRef} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateNews
