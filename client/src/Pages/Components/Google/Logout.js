import React, { useContext } from 'react'
import {GoogleLogout} from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';
const ClientId = '458159501348-1cvbb6hb8hte66at0fqv831lascvm4m1.apps.googleusercontent.com';  
function Logout() {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSuccess  = ()=>{
        localStorage.removeItem("User");
        dispatch({type : 'LOGOUT'});
        navigate("/signin");
    }
  return (
    <GoogleLogout
    clientId={ClientId}
    buttonText="Signout"
    onLogoutSuccess={onSuccess}
    ></GoogleLogout>
  )
}

export default Logout