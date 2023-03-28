import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function OrganisationList() {
    const [organisationList, setOrganisationList] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        getOrganisationList()
    }, []);

    function getOrganisationList() {
        axios.get('http://localhost:8000/api/organisations')
            .then(response => {
                setOrganisationList(response.data['hydra:member'])
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='my-3 offset-lg-4 col-lg-4'>Liste des organisations</h1>
                <button type='button' className='btn btn-primary offset-3 col-1 h-25 my-4' onClick={() => { navigate('/organisationForm', {state: {id: 'undefined'}}) }}>+</button>
                {organisationList.map(organisation => {
                    return (
                        <div key={organisation.id} className='offset-lg-4 col-lg-7 d-flex mb-3'>
                            <h2 className='me-5'>{organisation.id}</h2>
                            <h3>{organisation.name_organisation} {organisation.email}</h3>
                            <button type='button' className='btn btn-primary m-auto' onClick={() => { navigate('/organisationForm', {state: {id: organisation.id}}) }}>Modifier</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default OrganisationList;