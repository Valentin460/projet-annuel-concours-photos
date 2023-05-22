import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

function ProfileUser() {
    const [profileUser, setContestsList] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setProfileUser] = useState({
        email: '',
        password: '',
        genre:'',
        first_name:'',
        name:'',
        date_born:'',
        adresse:'',
        cp:'',
        city:'',
        country:'',
        tel_mobile:'',
    })

    function handleSubmit() {
        if (location.state.id !== 'undefined') {
            axios.put('http://localhost:8000/api/users/' + location.state.id, user)
                .then(response => {
                    navigate('/profileUser')
                })
        } else {
            // setUser({...user, date_creation: Date()})
            axios.post('http://localhost:8000/api/users', user)
                .then(response => {
                    navigate('/profileUser')
                })
        }

    }

    useEffect(() => {
        getProfileUser()
    }, []);

    function getProfileUser() {
        axios.get('http://localhost:8000/api/users')
            .then(response => {
                setProfileUser(response.data['hydra:member'])
            })
    }

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
                        <li className="nav-item" role="presentation">
                            <button className="nav-link sections-contests" id="results-tab" data-bs-toggle="tab" data-bs-target="#results"
                                    type="button" role="tab" aria-controls="results" aria-selected="false">Mes publicités
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content container navigate-infos-concours" id="myTabContent">
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
                                <input className='form-control' type={"text"} name="first_name" value={user.first_name} onChange={event => setProfileUser(event.target.value)}/>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>Nom*</label>
                                <input type={"text"} name="name" value={user.name} onChange={event => setProfileUser(event.target.value)} className='form-control'/>
                            </div>
                            <div className="form-group col-md-6 status">
                                <label htmlFor="inputState">Vous êtes*</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Cliquez ici</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor='lastName'>Date de naissance*</label>
                                <input type={"date"} name="date_born" value={user.date_born} onChange={event => setProfileUser(event.target.value)} className='form-control'/>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>Pays*</label>
                                <input type={"text"} name="country" value={user.country} onChange={event => setProfileUser(event.target.value)} className='form-control'/>
                            </div>
                            <div className="form-group col-md-6 status">
                                <label htmlFor='lastName'>Ville*</label>
                                <input type={"text"} name="city" value={user.city} onChange={event => setProfileUser(event.target.value)} className='form-control'/>
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor='lastName'>Code postal*</label>
                                <input type={"text"} name="cp" value={user.cp} onChange={event => setProfileUser(event.target.value)} className='form-control'/>
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="inputStatus">Statut</label>
                                <select id="inputStatus" className="form-control">
                                    <option selected>Cliquez ici</option>
                                    <option>Ecole/Formation</option>
                                    <option>En activité</option>
                                    <option>En recherche d'emploi</option>
                                    <option>A la retraite</option>
                                </select>
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="inputCategory">Catégorie</label>
                                <select id="inputCategory" className="form-control">
                                    <option selected>Cliquez ici</option>
                                    <option>Photographe amateur</option>
                                    <option>Photographe confirmé</option>
                                    <option>Photographe professionnel</option>
                                </select>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>Tel</label>
                                <input type={"text"} name="tel_mobile" value={user.tel_mobile} onChange={event => setProfileUser(event.target.value)} className='form-control'/>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>Photo</label>
                                <input type="file" name='picture' value="" className='form-control'/>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>URL du site</label>
                                <input type="text" name='website' value="" className='form-control'/>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>URL dus pages réseaux sociaux</label>
                                <input type="text" name='socialMedia' value="" className='form-control'/>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>Email*</label>
                                <input type="text" name='email' value="" className='form-control'/>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor='lastName'>Mot de passe*</label>
                                <input type="text" name='firstName' value="" className='form-control' placeholder="8 caractères min dont 1 chiffre et 1 lettre majuscule"/>
                            </div>
                            <br/>
                            <p className="card-text concours-unique-infos back bg-dark text-white" onClick={() => handleSubmit()}>Mettre à jour</p>
                        </div>
                        <div className="tab-pane fade infos-concours-section" id="reglement" role="tabpanel"
                             aria-labelledby="reglement-tab">
                            <br/><b>Si vous êtes simple membre</b><br/><br/>
                            <div className="bg-light">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Être informé par email lorsqu'un nouveau concours est publié
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Être informé par email lorsqu'un concours entre en phase de vote
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Être informé par email 48h avant la date de fin des votes d'un concours
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Être informé par email lorsque les résultats d'un concours sont publiés
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Être informé par email lorsqu'une nouvel article/actualité est publiée dans le blog
                                    </label>
                                </div>
                            </div>
                            <br/><b>Si vous êtes photographe</b><br/><br/>
                            <div className="bg-light">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Être informé lorsqu'un nouveau concours est publié et que mon profil satisfait les critères de participation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Être informé lorsqu'un concours entre en phase de soumission
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
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
                                    <input name='firstName' value="" className='form-control'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>Nom*</label>
                                    <input type="text" name='lastName' value="" className='form-control'/>
                                </div>
                                <div className="form-group col-md-6 status">
                                    <label htmlFor="inputState">Vous êtes*</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Cliquez ici</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label htmlFor='lastName'>Date de naissance*</label>
                                    <input type="date" name='dateBorn' value="" className='form-control'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>Pays*</label>
                                    <input type="text" name='country' value="" className='form-control'/>
                                </div>
                                <div className="form-group col-md-6 status">
                                    <label htmlFor='lastName'>Ville*</label>
                                    <input type="text" name='city' value="" className='form-control'/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label htmlFor='lastName'>Code postal*</label>
                                    <input type="text" name='postalCode' value="" className='form-control'/>
                                </div>
                                <div className="d-flex flex-column">
                                    <label htmlFor="inputStatus">Statut</label>
                                    <select id="inputStatus" className="form-control">
                                        <option selected>Cliquez ici</option>
                                        <option>Ecole/Formation</option>
                                        <option>En activité</option>
                                        <option>En recherche d'emploi</option>
                                        <option>A la retraite</option>
                                    </select>
                                </div>
                                <div className="d-flex flex-column">
                                    <label htmlFor="inputCategory">Catégorie</label>
                                    <select id="inputCategory" className="form-control">
                                        <option selected>Cliquez ici</option>
                                        <option>Photographe amateur</option>
                                        <option>Photographe confirmé</option>
                                        <option>Photographe professionnel</option>
                                    </select>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>Tel</label>
                                    <input type="text" name='phone' value="" className='form-control'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>Photo</label>
                                    <input type="file" name='picture' value="" className='form-control'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>URL du site</label>
                                    <input type="text" name='website' value="" className='form-control'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>URL dus pages réseaux sociaux</label>
                                    <input type="text" name='socialMedia' value="" className='form-control'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>Email*</label>
                                    <input type="text" name='email' value="" className='form-control'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>Mot de passe*</label>
                                    <input type="text" name='firstName' value="" className='form-control' placeholder="8 caractères min dont 1 chiffre et 1 lettre majuscule"/>
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
                        <div className="tab-pane infos-concours-section" id="results" role="tabpanel"
                             aria-labelledby="results-tab">
                            <div className="tab-pane infos-concours-section" id="members" role="tabpanel"
                                 aria-labelledby="members-tab">
                                <div className="container py-5">
                                    <b>4 concours</b>
                                    <table className="table">
                                        <thead>
                                        <tr className="bg-light">
                                            <th scope="col">Nom de l'emplacement de la publicité</th>
                                            <th scope="col">Date de début de l'affichage</th>
                                            <th scope="col">Date de fin de l'affichage</th>
                                            <th scope="col">Statut</th>
                                            <th scope="col">Affichages</th>
                                            <th scope="col">Clics</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Accueil : pub home header 1</td>
                                            <td>01/01/2023</td>
                                            <td>31/01/2023</td>
                                            <td>/</td>
                                            <td>2541</td>
                                            <td>125</td>
                                        </tr>
                                        <tr>
                                            <td>Concours photo du patrimoine historique</td>
                                            <td>01/03/2023</td>
                                            <td>31/03/2023</td>
                                            <td>/</td>
                                            <td>869</td>
                                            <td>74</td>
                                        </tr>
                                        <tr>
                                            <td>Footer</td>
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
