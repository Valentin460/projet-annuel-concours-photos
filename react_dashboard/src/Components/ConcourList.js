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
        axios.get('http://localhost:8000/api/concours')
            .then(response => {
                setConcourList(response.data['hydra:member'])
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='my-3 offset-lg-4 col-lg-4'>Liste des concours</h1>
                <button type='button' className='btn btn-primary offset-3 col-1 h-25 my-4' onClick={() => { navigate('/concoursForm', {state: {id: 'undefined'}}) }}>+</button>
                <h2 className='my-3 offset-lg-4 col-lg-4'>developement in progress ...</h2>
                {concourList.map(concour => {
                    return (
                        <div key={concour.id} className='offset-lg-4 col-lg-7 d-flex mb-3'>
                            <h2 className='me-5'>{concour.id}</h2>
                            <h3>{concour.name}</h3>
                            <button type='button' className='btn btn-primary m-auto' onClick={() => { navigate('/concoursForm', {state: {id: concour.id}}) }}>Modifier</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ConcourList;