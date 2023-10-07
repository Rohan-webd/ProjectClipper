import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function CategoryAdminAuth({components , isAdmin}) {
const navigate = useNavigate();
//   useEffect(()=>{
//   if(!isAdmin){
//   navigate("/signin");
//   }
//   } , []);
const BackHandler = (e) =>{
    e.preventDefault();
    navigate("/");
}
  return (
    <>
    <div>{isAdmin ? components : "PLEASE ADMIN LOGIN FIRST"}</div>
    {isAdmin && <button onClick={(e)=> BackHandler(e)}>GO BACK</button>}
    </>
    
  )
}

export default CategoryAdminAuth