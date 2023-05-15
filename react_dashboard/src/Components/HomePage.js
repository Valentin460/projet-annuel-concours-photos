import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from "react-router-dom";

function HomePage() {
    const [homePageConcours, setHomePageConcours] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState({
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
                    navigate('/membreList')
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
        getHomePageConcours()
    }, []);

    function getHomePageConcours() {
        axios.get('http://localhost:8000/api/contests')
            .then(response => {
                setHomePageConcours(response.data['hydra:member'])
            })
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setAuthToken = token => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        else
            delete axios.defaults.headers.common["Authorization"];
    }

    function getConnection() {
        axios.post('http://localhost:8000/api/login', { username, password })
            .then(response => {
                const jwt = response.data.token;
                if (jwt) {
                    localStorage.setItem('jwt', jwt);
                    setAuthToken(jwt);
                    navigate('/profileUser')

                }
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
                                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-person-add" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg> S'inscrire</a>
                                    <div className="modal fade" id="exampleModal1" tabIndex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Inscription</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <b>Créez votre compte membre, c'est gratuit !</b>
                                                    <p>Vous pourrez voter et participer en tant que photographe aux concours proposés. Si vous représentez une organisation et souhaitez publier un concours, créez d'abord votre compte.</p>
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
                                                        <input className='form-control' type={"text"} name="first_name" value={user.first_name} onChange={event => setUser(event.target.value)}/>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <label htmlFor='lastName'>Nom*</label>
                                                        <input type={"text"} name="name" value={user.name} onChange={event => setUser(event.target.value)} className='form-control'/>
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
                                                        <input type={"date"} name="date_born" value={user.date_born} onChange={event => setUser(event.target.value)} className='form-control'/>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <label htmlFor='lastName'>Pays*</label>
                                                        <input type={"text"} name="country" value={user.country} onChange={event => setUser(event.target.value)} className='form-control'/>
                                                    </div>
                                                    <div className="form-group col-md-6 status">
                                                        <label htmlFor='lastName'>Ville*</label>
                                                        <input type={"text"} name="city" value={user.city} onChange={event => setUser(event.target.value)} className='form-control'/>
                                                    </div>
                                                    <div className='form-group col-md-6'>
                                                        <label htmlFor='lastName'>Code postal*</label>
                                                        <input type={"text"} name="cp" value={user.cp} onChange={event => setUser(event.target.value)} className='form-control'/>
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
                                                        <input type={"text"} name="tel_mobile" value={user.tel_mobile} onChange={event => setUser(event.target.value)} className='form-control'/>
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
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox"
                                                                   id="gridCheck"/>
                                                                <label className="form-check-label" htmlFor="gridCheck">
                                                                    En cochant cette case, j'accepte les conditions générales d'utilisation ainsi que la politique d'utilisation de mes données personnelles.
                                                                </label>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="button" className="btn btn-dark" onClick={() => handleSubmit()}>Créer mon compte</button>
                                                        <p>Vous avez un compte ? <a href="" className="text-dark">Connectez-vous</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-item-user">
                                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-person-dash" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg> Se connecter</a>
                                    <div className="modal fade" id="exampleModal2" tabIndex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Connexion</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <b>Veuillez vous identifier pour pouvoir voter et participer.</b>
                                                    <p>Si vous n'avez pas de compte, <a href="" className="text-dark">inscrivez-vous</a> c'est gratuit.</p>
                                                    <div className='d-flex flex-column'>
                                                        <label htmlFor='lastName'>Email*</label>
                                                        <input name='username' className='form-control' type={'email'} value={username} onChange={(event) => setUsername(event.target.value)} />
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <label htmlFor='lastName'>Mot de passe*</label>
                                                        <input name='password' className='form-control' type={'password'} value={password} onChange={(event) => setPassword(event.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type='button' onClick={() => getConnection()} className="btn btn-dark">Se connecter</button>
                                                    <p>Vous avez oublié votre mot de passe ? <a href="" className="text-dark">Cliquez-ici</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="block-infos-home">
                    <h1 className="title-photos">Le portail des concours photo</h1>
                    <h3 className="infos-website">541 concours publiés</h3>
                    <h3 className="infos-website">495 organisateurs</h3>
                    <h3 className="infos-website">1587 photographes</h3>
                    <h3 className="infos-website">5847 photos</h3>
                    <h3 className="infos-website">19 587 membres</h3>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide carousel-photos">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="pub-header"/>
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="pub-header"/>
                <div>
                    <h3 className="last-photos">Derniers concours photo publiés</h3>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {homePageConcours.map(concour => {
                        return (
                            <div className="col" key={concour.id}>
                                <a onClick={() => { navigate('/InfoContest', {state: {id: concour.id}}) }}><div className="card">
                                    <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{concour.id} {concour.name_contests}</h5>
                                        <p className="card-text concours-infos">{concour.name_organisation}</p>
                                        <p className="card-text concours-infos">Nature</p>
                                        <p className="card-text concours-infos">{concour.status}</p>
                                        <br/><br/>
                                        <p className="card-text concours-infos">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                 className="bi bi-person-dash" viewBox="0 0 16 16">
                                                <path
                                                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                                <path
                                                    d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                            </svg> 121</p>
                                        <p className="card-text concours-infos">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                <path
                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                                                <path
                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                            </svg> 458</p>
                                        <p className="card-text concours-infos">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                            </svg> 254</p>
                                        <p className="dateConcours">{concour.date_results}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                <path
                                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                            </svg></p>
                                    </div>
                                </div></a>
                            </div>
                        )
                    })}
                    <div className="block-pagination">
                        <nav aria-label="Pagination" className="pagination-photos">
                            <ul className="pagination">
                                <li className="page-item page-item-photos"><a className="page-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg></a></li>
                                <li className="page-item page-item-photos"><a className="page-link" href="#">1</a></li>
                                <li className="page-item page-item-photos"><a className="page-link" href="#">2</a></li>
                                <li className="page-item page-item-photos"><a className="page-link" href="#">3</a></li>
                                <li className="page-item page-item-photos"><a className="page-link" href="#">4</a></li>
                                <li className="page-item page-item-photos"><a className="page-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="pub-footer-1"/>
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="pub-footer-2"/>
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

HomePage.propTypes = {};

export default HomePage;
