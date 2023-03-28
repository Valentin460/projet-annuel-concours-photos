import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MembreForm() {

    const [membre, setMembre] = useState({
        status:'',
        pseudo: '',
        dateRegister:'',
        dateDelete:'',
        dateUpdate:'',
        dateLastConnection:'',
        picture:'',
        descriptionPhotograph:'',
        statusPersonnal:'',
        categoryPhotograph:'',
        website:'',
        socialNetwork:'',
    })
    return (
        <div className="container">
            <h2>Gestion d'un membre</h2>
            <form className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor="status">Status</label>
                    <label className="switch">
                        <input type="checkbox" name={membre.status} onChange={(event) => setMembre(event.target.value)}/>
                            <span className="slider round"></span>
                    </label>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="pseudo">Pseudo</label>
                    <input className="form-control" type={"text"} name="pseudo" value={membre.name} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="picture">Visuel</label>
                    <input className="form-control" type={"file"} name="picture" value={membre.picture} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="descriptionPhotograph">Description</label>
                    <input className="form-control" type={"text"} name="descriptionPhotograph" value={membre.descriptionPhotograph} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="statusPersonnal">Statut personnel</label>
                    <input className="form-control" type={"text"} name="statusPersonnal" value={membre.statusPersonnal} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="categoryPhotograph">Catégorie</label>
                    <select name="categoryPhotograph" className="form-control" value={membre.categoryPhotograph} onChange={(event) => setMembre(event.target.value)}></select>
                    <option></option>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="website">Site web</label>
                    <input className="form-control" type={"text"} name="website" value={membre.website} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="socialNetwork">Réseaux sociaux</label>
                    <input className="form-control" type={"text"} name="socialNetwork" value={membre.socialNetwork} onChange={(event) => setMembre(event.target.value)}/>
                </div>
                <button type='button' className='btn btn-primary col-4 col-lg-2'>Enregistrer</button>
            </form>
        </div>
    );
}

MembreForm.propTypes = {};

export default MembreForm;