import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


function OrganisationForm() {

    const [organisation, setOrganisation] = useState({
        etat: '',
        name_organisation: '',
        type_organisation: '',
        description: '',
        logo: '',
        adresse: '',
        cp: '',
        city: '',
        country: '',
        url_website: '',
        email: '',
        tel: '',
    })
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (location.state.id !== 'undefined') {
            axios.get('http://localhost:8000/api/organizations/' + location.state.id)
                .then(response => {
                    setOrganisation(response.data)
                })
        }
    }, []);

    function handleSubmit() {
        if (location.state.id !== 'undefined') {
            axios.put('http://localhost:8000/api/organizations/' + location.state.id, organisation)
                .then(response => {
                    navigate('/organisationList')
                })
        } else {
            // setUser({...user, date_creation: Date()})
            axios.post('http://localhost:8000/api/organizations', organisation)
                .then(response => {
                    navigate('/organisationList')
                })
        }

    }

    return (
        <div className="container">
            <h2>Gestion d'une organisation</h2>
            <form className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor="status">Status</label>
                    <label className="switch">
                        <input type="checkbox" onChange={(event) => setOrganisation(event.target.value)} value={organisation.etat} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="name">Nom</label>
                    <input className="form-control" type={"text"} name="name_organisation" value={organisation.name_organisation} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="type_organisation">Type</label>
                    <input className="form-control" type={"text"} name="type_organisation" value={organisation.type_organisation} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="description">Description</label>
                    <input className="form-control" type={"text"} name="description" value={organisation.description} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="logo">Logo</label>
                    <input className="form-control" type={"file"} name="logo" value={organisation.logo} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="adresse">Adresse</label>
                    <input className="form-control" type={"text"} name="adresse" value={organisation.adresse} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="cp">Code postal</label>
                    <input className="form-control" type={"text"} name="cp" value={organisation.cp} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="city">Ville</label>
                    <input className="form-control" type={"text"} name="city" value={organisation.city} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="country">Pays</label>
                    <input className="form-control" type={"text"} name="country" value={organisation.country} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="url_website">Lien</label>
                    <input className="form-control" type={"text"} name="url_website" value={organisation.url_website} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="email">Adresse email</label>
                    <input className="form-control" type={"text"} name="email" value={organisation.email} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="tel">Numéro de téléphone</label>
                    <input className="form-control" type={"text"} name="tel" value={organisation.tel} onChange={(event) => setOrganisation(event.target.value)} />
                </div>
                <button type='button' className='btn btn-primary col-4 col-lg-2' onClick={() => handleSubmit()}>Enregistrer</button>
            </form>
        </div>
    );
}

export default OrganisationForm;