import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

function ConcoursForm() {

    const [contestsList, setContestsList] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    const [concours, setConcours] = useState({
        status:'',
        name_contests: '',
        themes:'',
        categoryParticipant:'',
        visual_concours:'',
        description:'',
        rules:'',
        prices:'',
        date_creation:'',
        date_publication:'',
        date_start_submissions:'',
        date_end_submissions:'',
        date_start_votes:'',
        date_end_votes:'',
        date_results:'',
        jury_votes_weighting:'',
        nb_max_votes:'',
        nbPrice:'',
        criteria_age_min:'',
        criteria_age_max:'',
    })

    useEffect(() => {
        if (location.state.id !== 'undefined') {
            axios.get('http://localhost:8000/api/contests/' + location.state.id)
        }
    }, []);

    function handleSubmit() {
        if (location.state.id !== 'undefined') {
            axios.put('http://localhost:8080/api/contests/' + location.state.id)
                .then(response => {
                    navigate('/concoursList')
                    console.log(response)
                })
        } else {
            alert('non non non')
        }
    }

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
                    <label htmlFor="name_concours">Nom</label>
                    <input className="form-control" type={"text"} name="name_concours" value={concours.name_contests} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="theme">Thème</label>
                    {/* <select name="theme" className="form-control" value={concours.theme} onChange={(event) => setConcours(event.target.value)}></select> */}
                    <option></option>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="categoryParticipant">Catégorie des participants</label>
                    {/* <select name="categoryParticipant" className="form-control" value={concours.categoryParticipant} onChange={(event) => setConcours(event.target.value)}></select> */}
                    <option></option>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="visual_concours">Visuel</label>
                    <input className="form-control" type={"file"} name="visual_concours" value={concours.visual_concours } onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="description">Description</label>
                    <input className="form-control" type={"text"} name="description" value={concours.description} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="reglement">Logo</label>
                    <input className="form-control" type={"file"} name="reglement" value={concours.rules} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="dotations">Dotations</label>
                    <input className="form-control" type={"text"} name="dotations" value={concours.prices} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="date_publication">Date publication</label>
                    <input className="form-control" type={"date"} name="date_publication" value={concours.date_publication} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="date_start_soumission">Date début de soumission</label>
                    <input className="form-control" type={"date"} name="date_start_soumission" value={concours.date_start_submissions} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="date_end_soumission">Date fin de soumission</label>
                    <input className="form-control" type={"date"} name="date_end_soumission" value={concours.date_end_submissions} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="date_start_votes">Date début des votes</label>
                    <input className="form-control" type={"date"} name="date_start_votes" value={concours.date_start_votes} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="date_end_votes">Date fin des votes</label>
                    <input className="form-control" type={"date"} name="date_end_votes" value={concours.date_end_votes} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="date_results">Date résultats</label>
                    <input className="form-control" type={"date"} name="date_results" value={concours.date_results} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="ponderation_votes_jury">Pondération</label>
                    <input className="form-control" type={"text"} name="ponderation_votes_jury" value={concours.jury_votes_weighting} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="nb_max_votes">Nombre max de votes</label>
                    <input className="form-control" type={"text"} name="nb_max_votes" value={concours.nb_max_votes} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="nb_prix">Nombre de prix</label>
                    <input className="form-control" type={"text"} name="nb_prix" value={concours.nbPrice} onChange={(event) => setConcours(event.target.value)}/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor="critere_age_min critere_age_max">Critères</label>
                    {/* <select name="critere_age_min critere_age_max" className="form-control" value={concours.critere_age_min.critere_age_max} onChange={(event) => setConcours(event.target.value)}></select> */}
                    <option></option>
                </div>
                <button type='button' className='btn btn-primary col-4 col-lg-2' onClick={() => handleSubmit()}>Enregistrer</button>
            </form>
        </div>
    );
}

export default ConcoursForm;