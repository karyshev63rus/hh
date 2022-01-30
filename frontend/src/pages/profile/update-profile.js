import React, { useState, useRef, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { updateItem } from '../../services/services'
import { Context } from '../../context/context'
import Preloader from '../../components/preloader';

const ProfileForm = () => {

    const { list, loading } = useContext(Context)

    const {id, first_name, last_name, email, birth_date, location, bio} = list

    const [firstName, setFirstName] = useState(first_name)
    const [lastName, setLastName] = useState(last_name)
    const [birthDate, setBirthDate] = useState(birth_date)
    const [locationData, setLocationData] = useState(location)
    const [bioData, setBioData] = useState(bio)
    
    const firstNameRef = useRef()
    const birthDateRef = useRef()
    const locationDataRef = useRef()
    const bioDataRef = useRef()
    const buttonRef = useRef()
    
    const [isEdit, setIsEdit] = useState(true)
    const [isReady, setIsReady] = useState(false)
    const user_id = `${id}`
    const path = 'users/update_profile/'
    const history = useHistory()

    const handleSubmit = (event) => {

        event.preventDefault()
        const stuff = new FormData()

        stuff.append('email', email)
        stuff.append('first_name', firstName)
        stuff.append('last_name', lastName)
        stuff.append('location', locationData)
        stuff.append('birth_date', birthDate)
        stuff.append('bio', bioData)

        if ( isReady ) {
            event.preventDefault()
            updateItem(path, user_id, stuff)
            setIsEdit(!isEdit)
            history.push('/news/')
            window.location.reload()
        }
    }

    const handleFirstNameRef = (event) => {
        if (event.key === 'Enter'){
            event.preventDefault()
            firstNameRef.current.focus()
        }
    }

    const handleBirthDateRef = (event) => {
        if (event.key === 'Enter'){
            event.preventDefault()
            birthDateRef.current.focus()
        }
    }

    const handleLocationDataRef = (event) => {
        if (event.key === 'Enter'){
            event.preventDefault()
            locationDataRef.current.focus()
        }
    }

    const handleBioDataRef = (event) => {
        if (event.key === 'Enter'){
            event.preventDefault()
            bioDataRef.current.focus()
        }
    }

    const handleIsReadyState = (event) => {
        if (event.key === 'Enter'){
            if (!bioData) {
                setIsReady(true)
                buttonRef.current.focus()
            }
            event.preventDefault()
            setIsReady(true)
            buttonRef.current.focus()
        }
    }

    return(
        <div>
        { loading ? <Preloader /> :
        <form onSubmit={handleSubmit}>
            <label className='col-form-label d-flex'>
            <input className='form-control mt-2'
                autoFocus
                placeholder='Фамилия'
                type="text"
                value={lastName}
                onKeyPress={handleFirstNameRef}
                onChange={e => setLastName(e.target.value)}
                disabled={isEdit}
            />
            </label>
            <label className='col-form-label d-flex'>
            <input className='form-control mt-2'
                ref={firstNameRef}
                placeholder='Имя'
                type="text"
                value={firstName}
                onKeyPress={handleBirthDateRef}
                onChange={e => setFirstName(e.target.value)}
                disabled={isEdit}
            />
            </label>
            <label className='col-form-label d-flex'>
            <input className='form-control mt-2'
                ref={birthDateRef}
                placeholder='Дата рожд.'
                type="text"
                value={birthDate}
                onKeyPress={handleLocationDataRef}
                onChange={e => setBirthDate(e.target.value)}
                disabled={isEdit}
            />
            </label>
            <label className='col-form-label d-flex'>
            <input className='form-control mt-2'
                ref={locationDataRef}
                placeholder='Место жительства'
                type="text"
                value={locationData}
                onKeyPress={handleBioDataRef}
                onChange={e => setLocationData(e.target.value)}
                disabled={isEdit}
            />
            </label>
            <label className='col-form-label d-flex'>
            <textarea className='form-control mt-2 textarea'
                ref={bioDataRef}
                placeholder='Факты биографии'
                type="text"
                rows='7'
                aria-multiline={true}
                value={bioData}
                onKeyPress={handleIsReadyState}
                onChange={e => setBioData(e.target.value)}
                disabled={isEdit}
            />
            </label>
            <hr/>
            <label className='col-form-label'>
                { !isEdit ?
            <button className='btn profile-submit btn-success mb-5' ref={buttonRef} type='submit'
                onClick={() => setIsReady(true)}>
                Submit
            </button> :
            <button className='btn profile-edit btn-secondary btn-lg btn-block mb-5' onClick={() => setIsEdit(!isEdit)}>
                    Edit
            </button>
            }
            </label>
            </form>
        }
            </div>
            )
        }
        
        export default ProfileForm
        