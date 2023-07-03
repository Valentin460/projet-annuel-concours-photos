import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from "moment";


function UserForm() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        etat: true,
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
        dateCreation: '2023-03-28T00:00:00+02:00'

    })
    const [newEmail, setNewEmail] = useState('')
    const [currentEmail, setCurrentEmail] = useState('')
    const [emailChange, setEmailChange] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state.id !== 'undefined') {
            axios.get('http://localhost:8000/api/users/' + location.state.id)
                .then(response => {
                    setUser(response.data)
                    setCurrentEmail(response.data.email)
                })
        }
    }, []);


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

    // function getCurrentUser() {
    //     axios.get('http://localhost:8000/api/auth')
    //         .then(response => {
    //             setCurrentUser(response.data.id)
    //         }).catch(err => {
    //             if (err.response.status === 401) {
    //                 console.log(err.response.status)
    //             }
    //         })
    // }

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
        if (location.state.id !== 'undefined') {
            if (emailChange === false) {
                axios.put('http://localhost:8000/api/users/' + location.state.id, user)
                    .then(response => {
                        navigate('/userList')
                        console.log(response)
                    })
            } else {
                alert('non non non')
            }
        } else {
            if (emailChange === false) {
                // setUser({...user, date_creation: Date()})
                axios.post('http://localhost:8000/api/users', user)
                    .then(response => {
                        navigate('/userList')
                        console.log(response)
                    })
            } else {
                alert('non non non')
            }
        }

    }

    return (
        <div className='container'>
            <h1 className='text-center'>{location.state.id !== 'undefined' ? 'Modifier': 'Ajouter'} votre profil</h1>
            <form className='row'>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='email'>Email</label>
                    <input name='email' type={'email'} className='form-control' value={user.email} onChange={(event) => emailValidation(event)} />

                    <label htmlFor='confirmEmail'>Confirmation email</label>
                    <input name='email' type={'email'} className='form-control' value={newEmail} onChange={(event) => newEmailValidation(event)} />
                    {emailChange ? <p className='text-danger'>L'email ne correspond pas</p> : ''}
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type={'password'} name='password' className='form-control' onChange={(event) => setUser({ ...user, password: event.target.value })} />

                    <label htmlFor='confirmPassword'>Confirmation mot de passe</label>
                    <input type={'password'} name='password' className='form-control' />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='firstName'>Prénom</label>
                    <input name='firstName' value={user.firstName} className='form-control' onChange={(event) => setUser({ ...user, firstName: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='lastName'>Nom</label>
                    <input name='lastName' value={user.name} className='form-control' onChange={(event) => setUser({ ...user, name: event.target.value })} />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='dateOfBirth'>Date de naissance</label>
                    <input name='dateOfBirth' type={'date'} value={moment(user.dateBorn).format('YYYY-MM-DD')} className='form-control' onChange={(event) => setUser({ ...user, dateBorn: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='address'>Adresse</label>
                    <input name='address' value={user.adresse} className='form-control' onChange={(event) => setUser({ ...user, adresse: event.target.value })} />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='postalCode'>Code postal</label>
                    <input name='postalCode' value={user.cp} className='form-control' onChange={(event) => setUser({ ...user, cp: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2'>
                    <label htmlFor='city'>Ville</label>
                    <input name='city' value={user.city} className='form-control' onChange={(event) => setUser({ ...user, city: event.target.value })} />
                </div>
                <div className='d-flex flex-column offset-lg-4 col-lg-2'>
                    <label htmlFor='country'>Pays</label>
                    <input name='country' value={user.country} className='form-control' onChange={(event) => setUser({ ...user, country: event.target.value })} />
                </div>
                <div className='d-flex flex-column col-lg-2 mb-3'>
                    <label htmlFor='phoneNumber'>Téléphone</label>
                    <input name='phoneNumber' value={user.telMobile} className='form-control' onChange={(event) => setUser({ ...user, telMobile: event.target.value })} />
                </div>
                <button type='button' className='btn btn-primary offset-lg-5 col-lg-2' onClick={() => handleSubmit()}>Enregister</button>
                <button type='button' className='btn btn-warning offset-lg-5 col-lg-2' onClick={() => console.log(user.dateCreation)}>log</button>
            </form>
        </div>
    );
}

export default UserForm;