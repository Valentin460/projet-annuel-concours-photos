import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MembreForm() {

    const [membre, setMembre] = useState({
        etat:'',
        pseudo: '',
        date_register:'',
        date_drop:'',
        date_maj:'',
        date_last_connection:'',
        picture_profile:'',
        description_photographe:'',
        statut_personnel:'',
        categorie_photographe:'',
        website:'',
        socialNetwork:'',
    })
    return (
        <div className="container">
            <h2>Gestion d'un membre</h2>
            <form className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor="etat">Status</label>
                    <label className="switch">
                        <input type="checkbox" name={membre.etat} onChange={(event) => setMembre(event.target.value)}/>
                            <span className="slider round"></span>
                    </label>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="pseudo">Pseudo</label>
                    <input className="form-control" type={"text"} name="pseudo" value={membre.name} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="picture_profile">Visuel</label>
                    <input className="form-control" type={"file"} name="picture_profile" value={membre.picture_profile} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="description_photographe">Description</label>
                    <input className="form-control" type={"text"} name="description_photographe" value={membre.description_photographe} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="statut_personnel">Statut personnel</label>
                    <input className="form-control" type={"text"} name="statut_personnel" value={membre.statut_personnel} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="categorie_photographe">Catégorie</label>
                    <select name="categorie_photographe" className="form-control" value={membre.categorie_photographe} onChange={(event) => setMembre(event.target.value)}></select>
                    <option></option>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="website">Site web</label>
                    <input className="form-control" type={"text"} name="website" value={membre.website} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="reseaux_sociaux">Réseaux sociaux</label>
                    <input className="form-control" type={"text"} name="reseaux_sociaux" value={membre.reseaux_sociaux} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <button type='button' className='btn btn-primary col-4 col-lg-2'>Enregistrer</button>
            </form>
        </div>
    );
}

MembreForm.propTypes = {};

export default MembreForm;