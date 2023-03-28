import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import LoginForm from './Components/LoginForm';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
    delete axios.defaults.headers.common["Authorization"];
}

function App() {

  const token = localStorage.getItem("jwt");
  if (token) {
    setAuthToken(token);
  }
  
  return (
    <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
    </Routes>
  );
}

export default App;
