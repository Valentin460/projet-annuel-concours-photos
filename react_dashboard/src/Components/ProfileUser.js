import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useLocation, useNavigate } from "react-router-dom";

function ProfileUser() {
    const [profileUser, setContestsList] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState({
        id: '',
        email: '',
        password: '',
        genre:'',
        firstName:'',
        name:'',
        dateBorn:'',
        adresse:'',
        cp:'',
        city:'',
        country:'',
        telMobile:'',
    })

    function getCurrentUser() {
        axios.get('http://localhost:8000/api/auth')
            .then(response => {
                setUser(response.data)
            }).catch(err => {
            if (err.response.status === 401) {
                console.log(err.response.status)
            }
        })
    }

    function logoutUser() {
        localStorage.clear();
        navigate("/");
    }

    function handleSubmit() {
        axios.put('http://localhost:8000/api/users/' + user.id, user)
            .then(response => {
                navigate('/profileUser')
            })
    }

    useEffect(() => {
        getCurrentUser()
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container">
                    <a className="navbar-brand" href="/">ConcoursPhoto.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link-bold">
                                <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                            </li>
                            <li className="nav-item nav-link-bold">
                                <a className="nav-link" href="#">Concours photo</a>
                            </li>
                            <li className="nav-item nav-link-bold">
                                <a className="nav-link" href="#">Photographes</a>
                            </li>
                            <li className="nav-item nav-link-bold">
                                <a className="nav-link" href="#">Organisateurs</a>
                            </li>
                            <li className="nav-item nav-link-bold">
                                <a className="nav-link" href="#">Créez votre concours</a>
                            </li>
                            <li className="nav-item nav-link-bold">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item nav-item-user">
                                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-person-dash" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg>
                                        Mon profil</a>
                                </li>
                                <li className="nav-item nav-item-user">
                                    <a className="nav-link" onClick={() => logoutUser()} data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-person-dash" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg>
                                        Déconnexion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h2>Mon compte</h2>
                <div className="container blocs-infos-photos">
                    <div className="col-12">
                        <ul className="nav nav-tabs container" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active sections-contests" id="concours-tab" data-bs-toggle="tab"
                                        data-bs-target="#concours"
                                        type="button" role="tab" aria-controls="concours" aria-selected="true">Mon profil
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link sections-contests" id="reglement-tab" data-bs-toggle="tab" data-bs-target="#reglement"
                                        type="button" role="tab" aria-controls="reglement" aria-selected="false">Mes préférences
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link sections-contests" id="price-tab" data-bs-toggle="tab" data-bs-target="#price"
                                        type="button" role="tab" aria-controls="price" aria-selected="false">Mon organisation
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link sections-contests" id="members-tab" data-bs-toggle="tab" data-bs-target="#members"
                                        type="button" role="tab" aria-controls="members" aria-selected="false">Concours créés par mon organisation
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link sections-contests" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#pictures"
                                        type="button" role="tab" aria-controls="pictures" aria-selected="false">Concours auquel j'ai participé
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content container navigate-infos-concours" id="myTabContent">
                            <div className="tab-pane fade show active infos-concours-section" id="concours" role="tabpanel"
                                 aria-labelledby="concours-tab">
                                <div className="row">
                                    <div className="col-lg-6 margin-blocs">
                                        <div className="d-flex form-input">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault1"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Homme&ensp;
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault2"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Femme&ensp;
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault2"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Non binaire
                                                </label>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Prénom*</label>
                                            <input className='form-control' type={"text"} name="first_name" value={user.firstName} onChange={(event) => setUser({ ...user, firstName: event.target.value })} />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Nom*</label>
                                            <input className='form-control' name="name" value={user.name} onChange={(event) => setUser({ ...user, name: event.target.value })} />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className='d-flex flex-column'>
                                                    <label htmlFor='lastName'>Date de naissance</label>
                                                    <input type={"date"} className='form-control' name="date_born" value={moment(user.dateBorn).format('YYYY-MM-DD')} onChange={(event) => setUser({ ...user, dateBorn: event.target.value })} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Categorie">Vous êtes</label>
                                                <select className="form-select" aria-label="Default select">
                                                    <option>Cliquez ici</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Email*</label>
                                            <input name='email' value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} className='form-control' type={'email'} />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Mot de passe*</label>
                                            <input type="password" name='password' onChange={event => setUser(event.target.value)} className='form-control' placeholder="8 caractères min dont 1 chiffre et 1 lettre majuscule"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Adresse</label>
                                            <input value={user.adresse} onChange={(event) => setUser({ ...user, adresse: event.target.value })} className='form-control' type={'text'} />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className='d-flex flex-column'>
                                                    <label htmlFor='lastName'>Code postal</label>
                                                    <input type={"text"} className='form-control' value={user.cp} onChange={(event) => setUser({ ...user, cp: event.target.value })} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Categorie">Ville</label>
                                                <input value={user.city} onChange={(event) => setUser({ ...user, city: event.target.value })} className='form-control' name="city"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className='d-flex flex-column'>
                                                    <label htmlFor='lastName'>Pays</label>
                                                    <input value={user.country} onChange={(event) => setUser({ ...user, country: event.target.value })} className='form-control' name="country"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="Categorie">Langue</label>
                                                <select className="form-select" aria-label="Default select">
                                                    <option>Français</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Pseudo</label>
                                            <input className='form-control' name="pseudo"/>
                                        </div>
                                    </div>
                                </div>
                                <b>Si vous êtes photographe</b>
                                <div>
                                    <label htmlFor="bio">Bio / fiche de présentation dans l'annuaire des photographes (Si vous avez soumis au moins 1 photo à un concours)</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Présentez vous brièvement : qui êtes-vous ? que faites-vous ? quelle est votre expérience, vos centres d'intérêts et vos spécialités en tant que photographe ?"></textarea>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor="Categorie">Votre catégorie en tant que photographe ?</label>
                                            <select className="form-select" aria-label="Default select">
                                                <option>Amateur</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='lastName'>Votre site personnel</label>
                                                <input className='form-control' name="country" placeholder="https//"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <b>Vos réseaux sociaux</b>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label htmlFor='lastName'>Votre page Facebook</label>
                                        <input className='form-control' name="country" placeholder="https//"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Votre chaîne Youtube</label>
                                            <input className='form-control' name="country" placeholder="https//"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label htmlFor='lastName'>Votre page Instagram</label>
                                        <input className='form-control' name="instagram" placeholder="https//"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Votre compte Twitter</label>
                                            <input className='form-control' name="twitter" placeholder="https//"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label htmlFor='lastName'>Votre page Linkedin</label>
                                        <input className='form-control' name="linkedin" placeholder="https//"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='d-flex flex-column'>
                                            <label htmlFor='lastName'>Votre chaîne TikTok</label>
                                            <input className='form-control' name="tiktok" placeholder="https//"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <p className="card-text concours-unique-infos back bg-dark text-white" onClick={() => handleSubmit()}>Mettre à jour</p>
                            </div>
                            <div className="tab-pane fade infos-concours-section" id="reglement" role="tabpanel"
                                 aria-labelledby="reglement-tab">
                                <br/><b>Si vous êtes simple membre</b><br/><br/>
                                <div className="bg-light">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé par email lorsqu'un nouveau concours est publié
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé par email lorsqu'un concours entre en phase de vote
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé par email 48h avant la date de fin des votes d'un concours
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé par email lorsque les résultats d'un concours sont publiés
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé par email lorsqu'une nouvel article/actualité est publiée dans le blog
                                        </label>
                                    </div>
                                </div>
                                <br/><b>Si vous êtes photographe</b><br/><br/>
                                <div className="bg-light">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé lorsqu'un nouveau concours est publié et que mon profil satisfait les critères de participation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé lorsqu'un concours entre en phase de soumission
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexCheckIndeterminate"/>
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            Être informé 48h avant la date de fin des soumissions d'un concours
                                        </label>
                                    </div>
                                </div>
                                <br/>
                                <p className="card-text concours-unique-infos back bg-dark text-white">Mettre à jour</p>
                            </div>
                            <div className="tab-pane fade infos-concours-section" id="price" role="tabpanel"
                                 aria-labelledby="price-tab">
                                <div className="tab-pane fade show active infos-concours-section" id="concours" role="tabpanel"
                                     aria-labelledby="concours-tab">
                                    <div className="form-check sex-member">
                                        <input className="form-check-input" type="radio"
                                               name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label"
                                               htmlFor="flexRadioDefault1">
                                            Homme
                                        </label>
                                    </div>
                                    <div className="form-check sex-member">
                                        <input className="form-check-input" type="radio"
                                               name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label"
                                               htmlFor="flexRadioDefault1">
                                            Femme
                                        </label>
                                    </div>
                                    <div className="form-check sex-member">
                                        <input className="form-check-input" type="radio"
                                               name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label"
                                               htmlFor="flexRadioDefault1">
                                            Non binaire
                                        </label>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>Prénom*</label>
                                        <input name='firstName' className='form-control'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>Nom*</label>
                                        <input type="text" name='lastName' className='form-control'/>
                                    </div>
                                    <div className="form-group col-md-6 status">
                                        <label htmlFor="inputState">Vous êtes*</label>
                                        <select id="inputState" className="form-control">
                                            <option>Cliquez ici</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='lastName'>Date de naissance*</label>
                                        <input type="date" name='dateBorn' className='form-control'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>Pays*</label>
                                        <input type="text" name='country' className='form-control'/>
                                    </div>
                                    <div className="form-group col-md-6 status">
                                        <label htmlFor='lastName'>Ville*</label>
                                        <input type="text" name='city' className='form-control'/>
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='lastName'>Code postal*</label>
                                        <input type="text" name='postalCode' className='form-control'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="inputStatus">Statut</label>
                                        <select id="inputStatus" className="form-control">
                                            <option>Cliquez ici</option>
                                            <option>Ecole/Formation</option>
                                            <option>En activité</option>
                                            <option>En recherche d'emploi</option>
                                            <option>A la retraite</option>
                                        </select>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="inputCategory">Catégorie</label>
                                        <select id="inputCategory" className="form-control">
                                            <option>Cliquez ici</option>
                                            <option>Photographe amateur</option>
                                            <option>Photographe confirmé</option>
                                            <option>Photographe professionnel</option>
                                        </select>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>Tel</label>
                                        <input type="text" name='phone' className='form-control'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>Photo</label>
                                        <input type="file" name='picture' className='form-control'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>URL du site</label>
                                        <input type="text" name='website' className='form-control'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>URL dus pages réseaux sociaux</label>
                                        <input type="text" name='socialMedia' className='form-control'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>Email*</label>
                                        <input type="text" name='email' className='form-control'/>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor='lastName'>Mot de passe*</label>
                                        <input type="text" name='firstName' className='form-control' placeholder="8 caractères min dont 1 chiffre et 1 lettre majuscule"/>
                                    </div>
                                </div>
                                <p className="card-text concours-unique-infos back bg-dark text-white">Mettre à jour</p>
                            </div>
                            <div className="tab-pane fade infos-concours-section" id="members" role="tabpanel"
                                 aria-labelledby="members-tab">
                                <div className="container py-5">
                                    <b>4 concours</b>
                                    <table className="table">
                                        <thead>
                                        <tr className="bg-light">
                                            <th scope="col">Nom du concours</th>
                                            <th scope="col">Date de début du concours</th>
                                            <th scope="col">Date de fin du concours</th>
                                            <th scope="col">Statut</th>
                                            <th scope="col">Participants</th>
                                            <th scope="col">Photos</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Concours de photos annuel 2023</td>
                                            <td>01/01/2023</td>
                                            <td>31/01/2023</td>
                                            <td>/</td>
                                            <td>27</td>
                                            <td>254</td>
                                        </tr>
                                        <tr>
                                            <td>Concours photos des PME</td>
                                            <td>10/02/2023</td>
                                            <td>20/02/2023</td>
                                            <td>/</td>
                                            <td>184</td>
                                            <td>1248</td>
                                        </tr>
                                        <tr>
                                            <td>Concours photo du patrimoine historique</td>
                                            <td>01/03/2023</td>
                                            <td>31/03/2023</td>
                                            <td>/</td>
                                            <td>18</td>
                                            <td>127</td>
                                        </tr>
                                        <tr>
                                            <td>Concours photo pour le site web</td>
                                            <td>10/04/2023</td>
                                            <td>10/05/2023</td>
                                            <td>/</td>
                                            <td>/</td>
                                            <td>/</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane infos-concours-section" id="pictures" role="tabpanel"
                                 aria-labelledby="pictures-tab">
                                <div className="tab-pane infos-concours-section" id="members" role="tabpanel"
                                     aria-labelledby="members-tab">
                                    <div className="container py-5">
                                        <b>4 concours</b>
                                        <table className="table">
                                            <thead>
                                            <tr className="bg-light">
                                                <th scope="col">Nom du concours</th>
                                                <th scope="col">Date de début du concours</th>
                                                <th scope="col">Date de fin du concours</th>
                                                <th scope="col">Statut</th>
                                                <th scope="col">Mes photos</th>
                                                <th scope="col">Photos</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Concours de photos annuel 2023</td>
                                                <td>01/01/2023</td>
                                                <td>31/01/2023</td>
                                                <td>/</td>
                                                <td>3</td>
                                                <td>/</td>
                                            </tr>
                                            <tr>
                                                <td>Concours photo du patrimoine historique</td>
                                                <td>01/03/2023</td>
                                                <td>31/03/2023</td>
                                                <td>/</td>
                                                <td>1</td>
                                                <td>/</td>
                                            </tr>
                                            <tr>
                                                <td>Concours photo pour le site web</td>
                                                <td>10/04/2023</td>
                                                <td>10/05/2023</td>
                                                <td>/</td>
                                                <td>/</td>
                                                <td>/</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-homepage">
                    <p className="link-footer"><b>ConcoursPhotos.com</b> @ Tous droits réservés</p>
                    <p className="link-footer">A propos</p>
                    <p className="link-footer">Mentions légales</p>
                    <p className="link-footer">Données personnelles</p>
                    <p className="link-footer">Annoncer sur ce site</p>
                    <p className="link-footer">Nous contacter</p>
                </footer>
            </div>
        </div>
    );
}

ProfileUser.propTypes = {};

export default ProfileUser;
