import React, {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../../context/authContext'

export default function Protected({children}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const {user} = useContext(AuthContext);
    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
        if(!user){
            navigate("/signin");
        }
        else{
            navigate("/review");
        }
        setLoader(false)
    }, [user, navigate])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}