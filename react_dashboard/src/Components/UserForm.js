import { React, useState, useEffect } from 'react'
import axios from 'axios'

function UserForm() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        status: true,
        gender: [],
        createdAt: '',
        firstName: '',
        name: '',
        dateBorn: '',
        adresse: '',
        cp: '',
        city: '',
        country: '',
        telMobile: '',

    })
    const [newEmail, setNewEmail] = useState('')
    const [currentEmail, setCurrentEmail] = useState('')
    const [emailChange, setEmailChange] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)




    useEffect(() => {
        getCurrentUser()
        axios.get('http://localhost:8000/api/users/' + currentUser)
            .then(response => {
                setUser(response.data)
                setCurrentEmail(response.data.email)
            })
    }, [currentUser])

    useEffect(() => {
        if (user.email !== newEmail && currentEmail !== user.email) {
            setEmailChange(true)
        } else {
            setEmailChange(false)
        }
    }, [user.email]);

    useEffect(() => {
        if (user.email !== newEmail) {
            setEmailChange(true)
        } else {
            setEmailChange(false)
        }
    }, [newEmail]);

    function getCurrentUser() {
        axios.get('http://localhost:8000/api/auth')
            .then(response => {
                setCurrentUser(response.data.id)

            }).catch(err => {
                if (err.response.status === 401) {
                    console.log(err.response.status)
                }
            }

            )
    }

    function updateUser() {
        if (emailChange === false) {
             axios.put('http://localhost:8000/api/users/' + currentUser, user)
            .then(response => {
                console.log(response)
            })
        } else {
            alert('non non non')
        }
       
    }

    function emailValidation(event) {
        setUser({ ...user, email: event.target.value })
        

    }

    function newEmailValidation(event) {
        setNewEmail(event.target.value)
        if (user.email !== newEmail) {
            setEmailChange(true)
        } else {
            setEmailChange(false)
        }

    }

    function handleSubmit() {

    }

    return (
        <div className='container'>
            <h1 className='text-center'>Modifier votre profil</h1>
            <form className='row'>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='email'>Email</label>
                    <input name='email' type={'email'} value={user.email} onChange={(event) => emailValidation(event)} />

                    <label htmlFor='confirmEmail'>Confirmation email</label>
                    <input name='email' type={'email'}  value={newEmail}  onChange={(event) => newEmailValidation(event) }/>
                    {emailChange ? <p className='text-danger'>L'email ne correspond pas</p>: ''}
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type={'password'} name='password' onChange={(event) => setUser({ ...user, password: event.target.value })} />

                    <label htmlFor='confirmPassword'>Confirmation mot de passe</label>
                    <input type={'password'} name='password' />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='firstName'>Prénom</label>
                    <input name='firstName' value={user.firstName} onChange={(event) => setUser({ ...user, firstName: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='lastName'>Nom</label>
                    <input name='lastName' value={user.name} onChange={(event) => setUser({ ...user, name: event.target.value })} />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='dateOfBirth'>Date de naissance</label>
                    <input name='dateOfBirth' value={user.dateBorn} onChange={(event) => setUser({ ...user, dateBorn: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='address'>Adresse</label>
                    <input name='address' value={user.adresse} onChange={(event) => setUser({ ...user, adresse: event.target.value })} />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='postalCode'>Code postal</label>
                    <input name='postalCode' value={user.cp} onChange={(event) => setUser({ ...user, cp: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='city'>Ville</label>
                    <input name='city' value={user.city} onChange={(event) => setUser({ ...user, city: event.target.value })} />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='country'>Pays</label>
                    <input name='country' value={user.country} onChange={(event) => setUser({ ...user, country: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2 mb-3'>
                    <label htmlFor='phoneNumber'>Téléphone</label>
                    <input name='phoneNumber' value={user.telMobile} onChange={(event) => setUser({ ...user, telMobile: event.target.value })} />
                </div>
                <button type='button' className='btn btn-primary offset-lg-5 col-lg-2' onClick={() => updateUser()}>Enregister</button>
                {/* <button type='button' className='btn btn-warning offset-lg-5 col-lg-2' onClick={() => console.log(currentEmail)}>log</button> */}
            </form>
        </div>
    );
}

export default UserForm;