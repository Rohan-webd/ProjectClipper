import React , {useContext} from 'react'
import {GoogleLogin} from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';
const ClientId = '458159501348-1cvbb6hb8hte66at0fqv831lascvm4m1.apps.googleusercontent.com';  
function Login() {
     const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
  const onSuccess = (res)=>{
    console.log("LOGIN SUCCESS" , res.profileObj);
    dispatch({type : 'LOGIN' , payload : res.profileObj});
    localStorage.setItem("User",JSON.stringify(res.profileObj));
    navigate("/review");
    }
    const onFailure = (res)=>{
    console.log("LOGIN FAILED",res);
    }
  return (
    <GoogleLogin
    clientId={ClientId}
    buttonText = "Signin with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single-host-origin'}
    isSignedIn = {true}
    />
  )
}

export default Login;