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
        axios.get('http://localhost:8000/api/members')
            .then(response => {
                setMembreList(response.data['hydra:member'])
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='my-3 text-center'>Liste des membres</h1>
                <button type='button' className='btn btn-primary offset-5 col-2 h-25 my-4' onClick={() => { navigate('/membreForm', {state: {id: 'undefined'}}) }}>+</button>
                {membreList.map(membre => {
                    return (
                        <div key={membre.id} className='offset-sm-4 col-sm-6 d-flex mb-3'>
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