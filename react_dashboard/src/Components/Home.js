import React from 'react';
import { useNavigate } from "react-router-dom";



function Home() {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center mb-5'>Navigation</h1>
                <button type='button' className='btn btn-primary offset-lg-3 col-lg-2 mb-3' onClick={() => navigate('/userList')}>Liste des utilisateurs</button>
                <button type='button' className='btn btn-warning offset-lg-2 col-lg-2 mb-3' onClick={() => navigate('/organisationList')}>Liste des organisations</button>
                <button type='button' className='btn btn-info offset-lg-3 col-lg-2' onClick={() => navigate('/concourList')}>Liste des concours</button>
                <button type='button' className='btn btn-success offset-lg-2 col-lg-2' onClick={() => navigate('/membreList')}>Liste des membres</button>
            </div>
        </div>
    );
}

export default Home;