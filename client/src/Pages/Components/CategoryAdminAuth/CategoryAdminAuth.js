import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Alert} from '@mui/material';

function CategoryAdminAuth({components , isadmin}) {
const navigate = useNavigate();
  // useEffect(()=>{
  // if(!isAdmin){
  // navigate("/signin");
  // }
  // } , []);
const BackHandler = (e) =>{
    e.preventDefault();
    navigate("/");
}

const [Admin , setisAdmin] = useState(false);
useEffect(() => {
const adminCond = JSON.parse(localStorage.getItem("AdminCondition"));
setisAdmin(adminCond);
}, [])


  return (
    <>
    
    <div>{Admin && components}</div>
    {!Admin && <button onClick={(e)=> BackHandler(e)}>GO BACK</button>}
    {!Admin && <Alert severity="error">PLEASE ADMIN LOGIN</Alert>};
    </>
    
  )
}

export default CategoryAdminAuth