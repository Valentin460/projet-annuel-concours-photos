import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import LoginForm from './Components/LoginForm';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import OrganisationForm from "./Components/OrganisationForm";
import ConcoursForm from "./Components/ConcoursForm";
import MembreForm from "./Components/MembreForm";

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
      <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/organisationForm' element={<OrganisationForm/>}></Route>
      <Route path='/concoursForm' element={<ConcoursForm/>}></Route>
      <Route path='/membreForm' element={<MembreForm/>}></Route>
    </Routes>
  );
}

export default App;
