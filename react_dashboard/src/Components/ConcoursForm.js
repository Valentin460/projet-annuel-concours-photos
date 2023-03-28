import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ConcoursForm() {

    const [concours, setConcours] = useState({
        status:'',
        name: '',
        theme:'',
        categoryParticipant:'',
        visualConcours:'',
        description:'',
        reglement:'',
        dotations:'',
        dateCreation:'',
        datePublication:'',
        dateStartSoumission:'',
        dateEndSoumission:'',
        dateStartVote:'',
        dateEndVote:'',
        dateResult:'',
        ponderation:'',
        nbMaxVote:'',
        nbPrice:'',
        criteres:'',
    })
    return (
        <div className="container">
            <h2>Gestion d'un concours</h2>
            <form className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor="status">Status</label>
                    <label className="switch">
                        <input type="checkbox" name={concours.status} onChange={(event) => setConcours(event.target.value)}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="name">Nom</label>
                    <input className="form-control" type={"text"} name="name" value={concours.name} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="theme">Thème</label>
                    <select name="theme" className="form-control" value={concours.theme} onChange={(event) => setConcours(event.target.value)}></select>
                    <option></option>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="categoryParticipant">Catégorie des participants</label>
                    <select name="categoryParticipant" className="form-control" value={concours.categoryParticipant} onChange={(event) => setConcours(event.target.value)}></select>
                    <option></option>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="visualConcours">Visuel</label>
                    <input className="form-control" type={"file"} name="visualConcours" value={concours.visualConcours } onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="description">Description</label>
                    <input className="form-control" type={"text"} name="description" value={concours.description} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="reglement">Logo</label>
                    <input className="form-control" type={"file"} name="reglement" value={concours.reglement} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="dotations">Dotations</label>
                    <input className="form-control" type={"text"} name="dotations" value={concours.dotations} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="datePublication">Date publication</label>
                    <input className="form-control" type={"date"} name="datePublication" value={concours.datePublication} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="dateStartSoumission">Date début de soumission</label>
                    <input className="form-control" type={"date"} name="dateStartSoumission" value={concours.dateStartSoumission} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="dateEndSoumission">Date fin de soumission</label>
                    <input className="form-control" type={"date"} name="dateEndSoumission" value={concours.dateEndSoumission} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="dateStartVote">Date début des votes</label>
                    <input className="form-control" type={"date"} name="dateStartVote" value={concours.dateStartVote} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="dateEndVote">Date fin des votes</label>
                    <input className="form-control" type={"date"} name="dateEndVote" value={concours.dateEndVote} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="ponderation">Pondération</label>
                    <input className="form-control" type={"text"} name="pondaration" value={concours.ponderation} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="nbMaxVote">Nombre max de votes</label>
                    <input className="form-control" type={"text"} name="nbMaxVote" value={concours.nbMaxVote} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="nbPrix">Nombre de prix</label>
                    <input className="form-control" type={"text"} name="nbPrix" value={concours.nbPrice} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="criteres">Critères</label>
                    <select name="criteres" className="form-control" value={concours.criteres} onChange={(event) => setConcours(event.target.value)}></select>
                    <option></option>
                </div>
                <button type='button' className='btn btn-primary col-4 col-lg-2'>Enregistrer</button>
            </form>
        </div>
    );
}

ConcoursForm.propTypes = {};

export default ConcoursForm;