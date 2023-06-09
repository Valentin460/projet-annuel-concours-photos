import { React, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const setAuthToken = token => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        else
            delete axios.defaults.headers.common["Authorization"];
    }

    function getConnection() {
        axios.post('http://localhost:8000/api/login', { username, password })
            .then(response => {
                const jwt = response.data.token;
                if (jwt) {
                    localStorage.setItem('jwt', jwt);
                    setAuthToken(jwt);
                    navigate('/home')
                    
                }
            })
    }

    return (
        <div className='container'>
            <form className='row flex-column align-items-center'>
                <div className='d-flex flex-column col-4 col-lg-2'>
                    <label htmlFor="username">Username</label>
                    <input name='username' className='form-control' type={'email'} value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className='d-flex flex-column col-4 col-lg-2 mb-3'>
                    <label htmlFor="password">Password</label>
                    <input name='password' className='form-control' type={'password'} value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type='button' onClick={() => getConnection()} className='btn btn-primary col-4 col-lg-2'>Connexion</button>
            </form>
        </div>
    );
}

export default LoginForm;