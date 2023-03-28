import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function MembreList() {
    const [membreList, setMembreList] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        getMembreList()
    }, []);

    function getMembreList() {
        axios.get('http://localhost:8000/api/membres')
            .then(response => {
                setMembreList(response.data['hydra:member'])
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='my-3 offset-lg-4 col-lg-4'>Liste des membres</h1>
                <button type='button' className='btn btn-primary offset-3 col-1 h-25 my-4' onClick={() => { navigate('/membreForm', {state: {id: 'undefined'}}) }}>+</button>
                {membreList.map(membre => {
                    return (
                        <div key={membre.id} className='offset-lg-4 col-lg-7 d-flex mb-3'>
                            <h2 className='me-5'>{membre.id}</h2>
                            <h3>{membre.pseudo}</h3>
                            <button type='button' className='btn btn-primary m-auto' onClick={() => { navigate('/membreForm', {state: {id: membre.id}}) }}>Modifier</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MembreList;