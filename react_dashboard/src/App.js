import logo from './logo.svg';
import './App.css';
import './HomePage.css';
import './ConcoursSearch.css';
import './InfoContest.css';
import {Route, Routes} from 'react-router-dom'
import LoginForm from './Components/LoginForm';
import UserForm from './Components/UserForm';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import OrganisationForm from "./Components/OrganisationForm";
import ConcoursForm from "./Components/ConcoursForm";
import MembreForm from "./Components/MembreForm";
import Home from './Components/Home';
import UserList from './Components/UserList';
import OrganisationList from './Components/OrganisationListe';
import ConcourList from './Components/ConcourList';
import MembreList from './Components/MembreListe';
import HomePage from './Components/HomePage';
import ConcoursSearch from "./Components/ConcoursSearch";
import InfoContest from "./Components/InfoContest";
import ProfileUser from "./Components/ProfileUser";

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
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/userList' element={<UserList/>}></Route>
      <Route path='/userForm' element={<UserForm/>}></Route>
      <Route path='/organisationList' element={<OrganisationList/>}></Route>
      <Route path='/organisationForm' element={<OrganisationForm/>}></Route>
      <Route path='/concourList' element={<ConcourList/>}></Route>
      <Route path='/concoursForm' element={<ConcoursForm/>}></Route>
      <Route path='/concoursSearch' element={<ConcoursSearch/>}></Route>
      <Route path='/infoContest' element={<InfoContest/>}></Route>
      <Route path='/membreList' element={<MembreList/>}></Route>
      <Route path='/membreForm' element={<MembreForm/>}></Route>
      <Route path='/profileUser' element={<ProfileUser/>}></Route>
    </Routes>
  );
}

export default App;
