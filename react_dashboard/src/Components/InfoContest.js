import React, {useState, useEffect, useRef} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import {useLocation, useNavigate} from "react-router-dom";

function InfoContest() {

        const editorRef = useRef(null);
        const log = () => {
            if (editorRef.current) {
                console.log(editorRef.current.getContent());
            }
        };

    const [infoContest, setInfoContest] = useState({
        etat: true,
        name_contests: '',
        visual_contests: '',
        description: '',
        rules: '',
        prices: '',
        dateCreation: '2023-03-28T00:00:00+02:00',
        datePublication: '2023-03-28T00:00:00+02:00',
        dateStartSubmissions: '2023-03-28T00:00:00+02:00',
        dateEndSubmissions: '2023-03-28T00:00:00+02:00',
        dateStartVotes: '2023-03-28T00:00:00+02:00',
        dateEndVotes: '2023-03-28T00:00:00+02:00',
        dateResults: '2023-03-28T00:00:00+02:00',
        juryVotesWeighting: '',
        nbMaxVotes: '',
        nbPrices: '',
        criteriaAgeMin: '',
        criteriaAgeMax: '',
        membersContests: []
    })
    const [membersList, setMembreList] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state.id !== 'undefined') {
            axios.get('http://localhost:8000/api/contests/' + location.state.id)
                .then(response => {
                    setInfoContest(response.data)
                })
        }
    }, []);

    // useEffect(() => {
    //     if (infoContest.membersContests !== undefined) {
    //         infoContest.membersContests.forEach(member => {
    //             axios.get('http://localhost:8000' + member)
    //                 .then(response => {
    //                     // setMembreList(membersList.push(response.data))
    //                     console.log(response.data)
    //                 })
    //         })
    //     }
    // }, [infoContest]);

    // useEffect(() => {
    //     console.log(membersList)
    // }, [membersList]);


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
                                <a className="nav-link active" aria-current="page" onClick={() => { navigate('/') }}>Accueil</a>
                            </li>
                            <li className="nav-item nav-link-bold">
                                <a className="nav-link" onClick={() => { navigate('concoursSearch') }}>Concours photo</a>
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
                                    <a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-person-add" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                        </svg> S'inscrire</a>
                                </li>
                                <li className="nav-item nav-item-user">
                                    <a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-person-dash" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                        </svg> Se connecter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1 className="title-photos">{infoContest.name_contests}</h1>
                        <p className="card-text concours-unique-infos">Thème :</p>
                        <p className="card-text concours-unique-infos">Pays :</p>
                        <p className="card-text concours-unique-infos">Région :</p>
                        <p className="card-text concours-unique-infos">Catégorie :</p>
                        <p className="card-text concours-unique-infos">Âge :</p>
                        <p className="card-text concours-unique-infos">Dotation :</p>
                    </div>
                    <div className="col-4 bloc-status-contest">
                        <p>Organisateur : <b className="name-organizations">URCAUE des Hauts-de-France</b></p>
                        <p className="card-text concours-unique-infos status-concours">PHASE DE VOTE</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path
                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                        <br/><br/>
                            <p className="card-text concours-infos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-person-dash" viewBox="0 0 16 16">
                                    <path
                                        d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                                    <path
                                        d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path>
                                </svg>
                                121
                            </p>
                        <p className="card-text concours-infos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-camera" viewBox="0 0 16 16">
                                <path
                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                                <path
                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                            </svg>
                            458
                        </p>
                        <p className="card-text concours-infos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-eye" viewBox="0 0 16 16">
                                <path
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                            1257
                        </p>
                    </div>
                </div>
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="carrousel-ads" />
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="pub-header" />
                <div id="carouselExampleIndicators" className="carousel slide picture-concours">
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
                            <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="d-block w-100" alt="..." />
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
            </div>
            <ul className="nav nav-tabs container" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="concours-tab" data-bs-toggle="tab" data-bs-target="#concours"
                        type="button" role="tab" aria-controls="concours" aria-selected="true">Le concours
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="reglement-tab" data-bs-toggle="tab" data-bs-target="#reglement"
                        type="button" role="tab" aria-controls="reglement" aria-selected="false">Règlement
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="price-tab" data-bs-toggle="tab" data-bs-target="#price"
                        type="button" role="tab" aria-controls="price" aria-selected="false">Prix à gagner
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="members-tab" data-bs-toggle="tab" data-bs-target="#members"
                        type="button" role="tab" aria-controls="members" aria-selected="false">Membres du Jury
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pictures-tab" data-bs-toggle="tab" data-bs-target="#pictures"
                        type="button" role="tab" aria-controls="pictures" aria-selected="false">Les photos
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="results-tab" data-bs-toggle="tab" data-bs-target="#results"
                        type="button" role="tab" aria-controls="results" aria-selected="false">Résultats
                    </button>
                </li>
            </ul>
            <div className="tab-content container navigate-infos-concours" id="myTabContent">
                <div className="tab-pane fade show active infos-concours-section" id="concours" role="tabpanel" aria-labelledby="concours-tab">
                    <h3 className="modal-edit">Présentation du concours photo</h3>
                    <p className="card-text concours-unique-infos concours-unique-infos-edit back"><a className="concours-unique-infos-edit" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg> EDITER</a></p>
                    <div className="modal fade" id="exampleModal3" tabIndex="-1"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Concours > onglet "présentation" : édition</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='lastName'>Nom du concours*</label>
                                                <input name='username' className='form-control' type={'text'} />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <label htmlFor="Theme">Thème du concours*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Nature</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="Categorie">Catégorie*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Ouvert à tous</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="Dotation">Dotation*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Cadeaux</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <label htmlFor="Age-min">Âge minimum requis pour participer*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Nature</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="Age-max">Âge maximum requis pour participer*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Ouvert à tous</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="Prix">Nombre de prix*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Cadeaux</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <label htmlFor="Pays">Pays*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Nature</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="Région">Région*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Ouvert à tous</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="Départements">Départements*</label>
                                                    <select className="form-select" aria-label="Default select">
                                                        <option selected>Cadeaux</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label htmlFor="Présentation">Présentation du concours</label>
                                                <div className="col-lg-10-">
                                                    <>
                                                        <Editor
                                                            onInit={(evt, editor) => editorRef.current = editor}
                                                            apiKey='pp8qzvseu0ma5pm9e26o3e5n1hlphuvcel0k0ira0839if31'
                                                            init={{
                                                                height: 500,
                                                                menubar: false,
                                                                plugins: [
                                                                    'advlist autolink lists link image charmap print preview anchor',
                                                                    'searchreplace visualblocks code fullscreen',
                                                                    'insertdatetime media table paste code help wordcount'
                                                                ],
                                                                toolbar: 'undo redo | formatselect | ' +
                                                                    'bold italic backcolor | alignleft aligncenter ' +
                                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                    'removeformat | help',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                            }}
                                                        />
                                                    </>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="d-flex">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                           id="flexRadioDefault1"/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            Publié
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                           id="flexRadioDefault2"/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                            Caché
                                                        </label>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='activation'>Date d'activation*</label>
                                                <input name='username' className='form-control' type={'date'} />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='publication'>Date de publication*</label>
                                                <input name='username' className='form-control' type={'date'} />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='debut-soumission'>Date de début des soumissions*</label>
                                                <input name='username' className='form-control' type={'date'} />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='fin-soumission'>Date de fin des soumissions*</label>
                                                <input name='username' className='form-control' type={'date'} />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='debut-vote'>Date de début des votes*</label>
                                                <input name='username' className='form-control' type={'date'} />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='fin-vote'>Date de fin des votes*</label>
                                                <input name='username' className='form-control' type={'date'} />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor='publication-resultat'>Date de publication des résultats*</label>
                                                <input name='username' className='form-control' type={'date'} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="container">
                                    <button type='button' className="btn btn-secondary save-contest">Annuler</button>
                                    <button type='button' className="btn btn-dark save-contest">Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <p>{infoContest.description}</p>
                    <p>{infoContest.dateStartSoumission} {infoContest.dateEndSoumission}</p>
                </div>
                <div className="tab-pane fade infos-concours-section" id="reglement" role="tabpanel" aria-labelledby="reglement-tab">
                    <h3>Règlement du concours</h3>
                    {infoContest.rules}
                </div>
                <div className="tab-pane fade infos-concours-section" id="price" role="tabpanel" aria-labelledby="price-tab">
                    <h3>Prix à gagner</h3>
                    {infoContest.prices}
                </div>
                <div className="tab-pane fade infos-concours-section" id="members" role="tabpanel" aria-labelledby="members-tab">
                    <h3>Membres du Jury</h3>
                    <p>{infoContest.membersContest} membres du Jury</p>
                    <p className="name-jury">Bernadette VANNOBEL, présidente de URCAUE présidente du CAUE de l'Aisne</p>
                </div>
                <div className="tab-pane fade infos-concours-section" id="pictures" role="tabpanel" aria-labelledby="pictures-tab">
                    <h3>Les photos</h3>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as
                                        a natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as
                                        a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as
                                        a natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as
                                        a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as
                                        a natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as
                                        a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="block-pagination">
                            <nav aria-label="Pagination" className="pagination-photos">
                                <ul className="pagination">
                                    <li className="page-item page-item-photos"><a className="page-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" /></svg></a></li>
                                    <li className="page-item page-item-photos"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item page-item-photos"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item page-item-photos"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item page-item-photos"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item page-item-photos"><a className="page-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" /></svg></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade infos-concours-section" id="results" role="tabpanel" aria-labelledby="results-tab">
                    <h3>Résultats</h3>
                </div>
                <p className="card-text concours-unique-infos back"><a onClick={() => { navigate('/') }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg> Retour</a></p>
            </div>
            <div className="container">
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="pub-footer-1" />
                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" alt="..." className="pub-footer-2" />
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

export default InfoContest;
