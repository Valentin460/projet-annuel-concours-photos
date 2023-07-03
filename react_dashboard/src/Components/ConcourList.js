import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function ConcourList() {
    const [concourList, setConcourList] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        getConcourList()
    }, []);

    function getConcourList() {
        axios.get('http://localhost:8000/api/contests')
            .then(response => {
                setConcourList(response.data['hydra:member'])
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Liste des concours</h1>
                <button type='button' className='btn btn-primary offset-5 col-2 h-25 my-4' onClick={() => { navigate('/concoursForm', {state: {id: 'undefined'}}) }}>+</button>
                {concourList.map(concour => {
                    return (
                        <div key={concour.id} className='offset-sm-4 col-sm-6 d-flex mb-3'>
                            <h2 className='me-5'>{concour.id}</h2>
                            <h3>{concour.name_contests}</h3>
                            <button type='button' className='btn btn-primary m-auto' onClick={() => { navigate('/concoursForm', {state: {id: concour.id}}) }}>Modifier</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ConcourList;