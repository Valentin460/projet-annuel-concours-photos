import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function OrganisationForm() {

    const [organisation, setOrganisation] = useState({
        status:'',
        name: '',
        type:'',
        description:'',
        logo:'',
        adresse:'',
        postalCode:'',
        city:'',
        country:'',
        link:'',
        email:'',
        phone:'',
    })
        return (
            <div className="container">
                <h2>Gestion d'une organisation</h2>
                <form className='form-row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="status">Status</label>
                        <label className="switch">
                            <input type="checkbox" onChange={(event) => setOrganisation(event.target.value)} name={organisation.status}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="name">Nom</label>
                        <input className="form-control" type={"text"} name="name" value={organisation.name} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="type">Type</label>
                        <input className="form-control" type={"text"} name="type" value={organisation.type} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="description">Description</label>
                        <input className="form-control" type={"text"} name="description" value={organisation.description} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="logo">Logo</label>
                        <input className="form-control" type={"file"} name="logo" value={organisation.logo} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="adresse">Adresse</label>
                        <input className="form-control" type={"text"} name="adresse" value={organisation.adresse} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="postalCode">Code postal</label>
                        <input className="form-control" type={"text"} name="postalCode" value={organisation.postalCode} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="city">Ville</label>
                        <input className="form-control" type={"text"} name="city" value={organisation.city} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="country">Pays</label>
                        <input className="form-control" type={"text"} name="country" value={organisation.country} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="link">Lien</label>
                        <input className="form-control" type={"text"} name="link" value={organisation.link} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="email">Adresse email</label>
                        <input className="form-control" type={"text"} name="email" value={organisation.email} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="tel">Numéro de téléphone</label>
                        <input className="form-control" type={"text"} name="tel" value={organisation.phone} onChange={(event) => setOrganisation(event.target.value)}/>
                    </div>
                    <button type='button' className='btn btn-primary col-4 col-lg-2'>Enregistrer</button>
                </form>
            </div>
        );
}

OrganisationForm.propTypes = {};

export default OrganisationForm;