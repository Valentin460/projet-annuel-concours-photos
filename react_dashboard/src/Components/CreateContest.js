import { React } from 'react'
import {useNavigate} from "react-router-dom";

function CreateContest() {

    const navigate = useNavigate();

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
                                <a className="nav-link" href="#" >Créez votre concours</a>
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
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg> S'inscrire</a>
                                </li>
                                <li className="nav-item nav-item-user">
                                    <a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-person-dash" viewBox="0 0 16 16">
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                                        </svg> Se connecter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <h2>Créez votre concours</h2>
                    <div className="col-lg-4 margin-blocs">
                        <br/>
                        <b><p>Qui peut créer un concours photo ?</p></b>
                        <p>Seules les organisations peuvent créer un concours :</p>
                        <ul>
                            <li>Mairies</li>
                            <li>Offices de tourisme</li>
                            <li>Agglomérations</li>
                            <li>Départements</li>
                            <li>Régions</li>
                            <li>Collectivités territoriales</li>
                            <li>Organisations gouvernementales</li>
                            <li>Organismes de droit public</li>
                            <li>Entreprises privées</li>
                            <li>Associations, ONG</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <br/>
                        <b><p>Combien ça coûte ?</p></b>
                        <p>Le prix est établi pour chaque concours publié et il dépend de plusieurs critères :</p>
                        <ul>
                            <li>Nature de votre organisation (privée, publique, association/ONG)</li>
                            <li>Taille de votre organisation (moyens budgétaires)</li>
                            <li>Objet du concours photo, étendue, audience visée.</li>
                        </ul>
                        <p>Pour recevoir un devis, veuillez renseigner le formulaire de demande de création suivant qui va créer automatiquement un compte membre et une fiche organisme associée.
                            Votre demande sera étudiée et vous recevrez un devis.
                            Après avoir encaissé le paiement, vous pourrez paramétrer et publier votre concours.</p>
                        <p><b>Si vous avez déjà créé un compte membre</b>, veuillez vous connecter puis rendez-vous dans "Mon profil > Mes organisations > Concours"</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 margin-blocs">
                        <b>Vous êtes ?</b>
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
                            <input name='firstname' className='form-control' type={'text'} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='lastName'>Nom*</label>
                            <input name='name' className='form-control' type={'text'} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='lastName'>Email*</label>
                            <input name='email' className='form-control' type={'email'} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='lastName'>Téléphone*</label>
                            <input name='tel' className='form-control' type={'tel'} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='d-flex flex-column'>
                            <label htmlFor='lastName'>Nom de l'organisation*</label>
                            <input name='organisation-name' className='form-control' type={'email'} />
                        </div>
                        <div className="col-lg-12">
                            <label htmlFor="Categorie">Type d'organisation*</label>
                            <select className="form-select" aria-label="Default select">
                                <option selected>Cliquez-ici</option>
                            </select>
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='lastName'>Adresse*</label>
                            <input name='organisation-name' className='form-control' type={'email'} />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="Categorie">Code postal*</label>
                                <select className="form-select" aria-label="Default select">
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <div className='d-flex flex-column'>
                                    <label htmlFor='lastName'>Ville*</label>
                                    <input name='organisation-name' className='form-control' type={'email'} />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column col-lg-6'>
                            <label htmlFor='lastName'>Pays*</label>
                            <input name='organisation-name' className='form-control' type={'text'} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h2><b>A propos du concours à publier</b></h2>
                    <div className='d-flex flex-column col-lg-12'>
                        <label htmlFor='lastName'>Nom du concours*</label>
                        <input name='contest-name' className='form-control' type={'text'} />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="Categorie">Quelle est l'étendue/zone de visibilité du concours ?*</label>
                            <select className="form-select" aria-label="Default select">
                                <option selected>Départementale</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor='lastName'>Combien y-a-t-il de sponsors ?*</label>
                            <input name='contest-sponsors' className='form-control' type={'text'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-6'>
                            <label htmlFor='lastName'>Combien y-a-t-il de prix à gagner ?*</label>
                            <input name='contest-price' className='form-control' type={'text'} />
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor='lastName'>Quelle est la valeur totale des dotations/prix à gagner ?*</label>
                            <input name='contest-dotation' className='form-control' type={'text'} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Quelle est le thème et la nature du concours ?</label>
                        <textarea className="form-control rounded-0" id="exampleFormControlTextarea1"
                                  rows="10" placeholder="Présentez brièvement l'objet et la finalité du concours, sa portée, les sponsors, les lots mis en jeu..."></textarea>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                En validant ce formulaire, j'accepte qu'un compte membre soit créé pour traiter ma demande.
                            </label>
                    </div>
                    <br/>
                    <br/>
                    <p className="card-text concours-unique-infos back"><a onClick={() => { navigate('/') }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg> Retour</a></p>
                    <p className="card-text concours-unique-infos concours-unique-infos-edit back"><a className="concours-unique-infos-edit" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg> Envoyer la demande</a></p>
                </div>
                <br/>
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

export default CreateContest;