import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from "react-router-dom";

function InfoContest() {

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
    })
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
                                    <a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-person-add" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg>
                                        S'inscrire</a>
                                </li>
                                <li className="nav-item nav-item-user">
                                    <a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-person-dash" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg>
                                        Se connecter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div>
                    <h1 className="title-photos">{infoContest.name_contests}</h1>
                    <p className="card-text concours-unique-infos">Thème :</p>
                    <p className="card-text concours-unique-infos">Pays :</p>
                    <p className="card-text concours-unique-infos">Région :</p>
                    <p className="card-text concours-unique-infos">Catégorie :</p>
                    <p className="card-text concours-unique-infos">Âge :</p>
                    <p className="card-text concours-unique-infos">Dotation :</p>
                </div>
                <img
                    src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                    alt="..." className="carrousel-ads"/>
                <img
                    src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                    alt="..." className="pub-header"/>
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
                            <img
                                src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                className="d-block w-100" alt="..."/>
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
            <div className="container blocs-infos-photos">
                <div className="col-8">
                <ul className="nav nav-tabs container" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="concours-tab" data-bs-toggle="tab"
                                data-bs-target="#concours"
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
                    <div className="tab-pane fade show active infos-concours-section" id="concours" role="tabpanel"
                         aria-labelledby="concours-tab">
                        <h3>Présentation du concours photo</h3>
                        <p>{infoContest.description}</p>
                        <p>{infoContest.dateStartSoumission} {infoContest.dateEndSoumission}</p>
                    </div>
                    <div className="tab-pane fade infos-concours-section" id="reglement" role="tabpanel"
                         aria-labelledby="reglement-tab">
                        <h3>Règlement du concours</h3>
                        {infoContest.rules}
                    </div>
                    <div className="tab-pane fade infos-concours-section" id="price" role="tabpanel"
                         aria-labelledby="price-tab">
                        <h3>Prix à gagner</h3>
                    </div>
                    <div className="tab-pane fade infos-concours-section" id="members" role="tabpanel"
                         aria-labelledby="members-tab">
                        <h3>Membres du Jury</h3>
                        <p>X membres du Jury</p>
                        <p className="name-jury">Bernadette VANNOBEL, présidente de URCAUE présidente du CAUE de l'Aisne</p>
                    </div>
                    <div className="tab-pane fade infos-concours-section" id="pictures" role="tabpanel"
                         aria-labelledby="pictures-tab">
                        <h3>Les photos</h3>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
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
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a short card.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as
                                            a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
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
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a short card.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as
                                            a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
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
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a short card.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img
                                        src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                                        className="card-img-top" alt="..."></img>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-arrow-left-circle-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                            </svg>
                                        </a></li>
                                        <li className="page-item page-item-photos"><a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item page-item-photos"><a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item page-item-photos"><a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item page-item-photos"><a className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item page-item-photos"><a className="page-link" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                            </svg>
                                        </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade infos-concours-section" id="results" role="tabpanel"
                         aria-labelledby="results-tab">
                        <h3>Résultats</h3>
                    </div>
                    <p className="card-text concours-unique-infos back"><a onClick={() => {
                        navigate('/')
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        Retour</a></p>
                </div>
                </div>
                <div className="col-4">
                    <div className="row row-cols-1 row-cols-md-2 g-4 last-photos">
                        <h4 className="photos">Dernières photos soumises</h4>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg" className="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <p className="card-text concours-unique-infos back more-pictures">Voir les photos soumises</p>
                </div>
            </div>
            <div className="container footer-infos">
                <img
                    src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                    alt="..." className="pub-footer-1"/>
                <img
                    src="https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                    alt="..." className="pub-footer-2"/>
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

InfoContest.propTypes = {};

export default InfoContest;
