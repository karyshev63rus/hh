import React, { useState, useRef, useContext } from "react"
import { useHistory } from "react-router-dom"
import { createItem } from "../../services/services"
import { Context } from "../../context/context"

const CreateNews = () => {

    const path = ''
    const [ isReady, setIsReady ] = useState(false)
    let history = useHistory()

    const { id, first_name } = useContext(Context)
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ image, setImage ] = useState('')

    const textRef = useRef()
    const urlRef = useRef()
    const imageRef = useRef()
    const buttonRef = useRef()

    const title_to_slug = (text) => {
        return text
            .toString()                     // Cast to string
            .toLowerCase()                  // Convert the string to lowercase letters
            .trim()                         // Remove whitespace from both sides of a string
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/&/g, '-y-')           // Replace & with 'and'
            .replace(/[^\w\\-]+/g, '')       // Remove all non-word chars
            .replace(/\\-\\-+/g, '-')         // Replace multiple - with single -
            + Date.now()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const stuff = new FormData()
        stuff.append('title', title)
        stuff.append('author', id)
        stuff.append('text', text)
        stuff.append('url', url)
        stuff.append('image', image)
        stuff.append('slug', title_to_slug(title))
        if ( isReady ) {
            event.preventDefault()
            createItem(path, stuff)
            history.push('/')
        }
    }

    const handleUrlRef = (event) => {
        if (event.key === 'Enter'){
            urlRef.current.focus()
        }
    }

    const handleImageRef = (event) => {
        if (event.key === 'Enter'){
            imageRef.current.focus()
        }
    }

    const handleIsReadyState = (event) => {
        event.preventDefault()
        if (event.key === 'Enter'){
            if (!image) {
                setIsReady(true)
                buttonRef.current.focus()
            }
            setIsReady(true)
            buttonRef.current.focus()
        }
    }

    return(
        <div className='content'>
            <h3 className='mb-2'>Добавление новой записи от пользователя {`${first_name}`}</h3>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <label className='col-form-label'>
                            <input className='form-control mt-2'
                                autoFocus={true}
                                placeholder='title'
                                type="text"
                                value={title}
                                onKeyPress={() => textRef.current.focus()}
                                onChange={e => setTitle(e.target.value)}
                                />
                        </label>
                        <label className='col-form-label'>
                            <textarea className='form-control mt-2'
                                ref={textRef}
                                placeholder='text'
                                type="text"
                                rows='7'
                                aria-multiline={true}                                value={text}
                                onKeyPress={handleUrlRef}
                                onChange={e => setText(e.target.value)}
                            />
                        </label>
                        <label className='col-form-label'>
                            <input className='form-control mt-2'
                                ref={urlRef}
                                placeholder='text'
                                type="URL"
                                value={url}
                                onKeyPress={handleImageRef}
                                onChange={e => setUrl(e.target.value)}
                            />
                        </label>
                        <label className='col-form-label'>
                            <input className='form-control mt-2'
                                ref={imageRef}
                                type="file"
                                onKeyPress={handleIsReadyState}
                                onChange={e => setImage(e.target.files[0])}
                            />
                        </label>
                        <button className='btn btn-success btn-lg mt-3' ref={buttonRef} type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default CreateNews
