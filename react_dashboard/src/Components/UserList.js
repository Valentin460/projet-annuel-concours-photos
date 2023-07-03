import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function UserList() {
    const [userList, setUserList] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        getUserList()
    }, []);

    function getUserList() {
        axios.get('http://localhost:8000/api/users')
            .then(response => {
                setUserList(response.data['hydra:member'])
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='my-3 text-center'>Liste des utilisateurs</h1>
                <button type='button' className='btn btn-primary offset-5 col-2 h-25 my-4' onClick={() => { navigate('/userForm', {state: {id: 'undefined'}}) }}>+</button>
                {userList.map(user => {
                    return (
                        <div key={user.id} className='offset-sm-4 col-sm-6 d-flex mb-3'>
                            <h2 className='me-5'>{user.id}</h2>
                            <h3>{user.firstName} {user.name} {user.email}</h3>
                            <button type='button' className='btn btn-primary m-auto' onClick={() => { navigate('/userForm', {state: {id: user.id}}) }}>Modifier</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default UserList;