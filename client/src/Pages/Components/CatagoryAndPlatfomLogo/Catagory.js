import React, { useEffect } from "react";
import "../CatagoryAndPlatfomLogo/Catagory.css";
import Axios from 'axios';
import { useState } from "react";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useCategory } from "../../../context/CategoryContext";
import { usePlatform } from "../../../context/PlatFormContext";
function Catagory() {

  const [isAddCatagoryOpen, setIsAddCatagoryOpen] = useState(false);
  const handleOpenAddCatagory = () => setIsAddCatagoryOpen(true);
  const handleCloseAddCatagory = () => setIsAddCatagoryOpen(false);

  const [isCatagoryDelete, setCatagoryDelete] = useState(false);
  const handleOpenCatagoryDelete = () => setCatagoryDelete(true);
  const handleCloseCatagoryDelete = () => setCatagoryDelete(false);

  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const handleOpenAddPlatformLogo = () => setIsPlatformOpen(true);
  const handleCloseAddPlatformLogo = () => setIsPlatformOpen(false);

  const [isLogoDeleteOpen, setIsLogoDeleteOpen] = useState(false);
  const handleOpenDeleteLogo = () => setIsLogoDeleteOpen(true);
  const handleCloseDeleteLogo = () => setIsLogoDeleteOpen(false);
  const [category , setCategory] = useState('');
  const {addCat , deleteCat , Categories} = useCategory();
  const {addplatform , deleteplatform , Platforms} = usePlatform();
  const [platformName , setplatformName] = useState('');
  const [platformUrl , setplatformUrl] = useState('');
  const OnDeleteCatHandler = async(event , cat) =>{
    event.preventDefault();
    try{
    const response = await axios.delete(`http://localhost:3001/category/delete/${cat}`);
    if(response.statusText === 'OK'){
    deleteCat(cat);
    }
    }
    catch(err){
      console.log(err);
    }
  }
  const AddCategoryHandler = async(e) =>{
    e.preventDefault();
    try{
      const data = {
        category : category
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
       const response = await fetch('http://localhost:3001/category' , requestOptions);
       const data_res = await response.json();
       console.log(data_res);
       if(response.ok){
        addCat(category,data_res._id);
        handleCloseAddCatagory(); 
       }
       else{
        console.log("CANT SENT CATEGORY");
       }
    }
    catch(err){
      console.log(err);
    }
  }
   
    const PlatformAddHandler = async (e) => {
      e.preventDefault();
      try{
      const data_platform = {
        name : platformName,
        url : platformUrl
      };
      console.log(data_platform);
      const response = await axios.post('http://localhost:3001/platform',data_platform);
      console.log(response);
      if(response.statusText == 'OK'){
        addplatform(data_platform.name,data_platform.url, response.data.Platform._id);
        handleCloseAddPlatformLogo();
      }
      }
      catch(err){
        console.log(err);
      }
    }

    const PlatformDeleteHandler = async (e , name_plat) =>{
      e.preventDefault();
      try{
        const response_del = await axios.delete(`http://localhost:3001/platform/${name_plat}`);
        console.log(response_del);
        if(response_del.statusText == 'OK'){
          deleteplatform(name_plat);
        }
      }
      catch(err){
        console.log(err);
      }
    }
    // useEffect(()=>{
    //   const Local_cat = JSON.parse(localStorage.getItem("categories"));
    //   setCategories(Local_cat);
    //   const Local_plat = JSON.parse(localStorage.getItem("platforms"));
    //   setPlatforms(Local_plat);
    //   }, []);

    
    // useEffect(()=>{
    //   if(!localStorage.getItem("platforms") || JSON.parse(localStorage.getItem("platforms"))){
    //       localStorage.setItem("platforms" , JSON.stringify(Platforms));
    //   }

    //   if(!localStorage.getItem("categories") || JSON.parse(localStorage.getItem("categories"))){
    //     localStorage.setItem("categories" , JSON.stringify(categories));
    //   } 
    // }, [categories,Platforms]);

  const handleCloseCategory = (event)=>{
    event.preventDefault();
  }
  return (
    <>
      <div className="main-catag">
        <div className="cata-logo">
          <div className="catagory">
            <div className="cata-btn">
              <Button
                onClick={handleOpenAddCatagory}
                variant="contained"
              >
                Add Category
              </Button>
            </div>

            <Divider style={{ marginTop: "5px" }}></Divider>

            <div>
              <ul>
                {Categories?.map((data,id)=>{
                  return <li key={id}>{data} <DeleteIcon
                  onClick={(e) => OnDeleteCatHandler(e , data)}
                  className="del-cata"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "  rgb(184, 180, 180)",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    verticalAlign: "bottom",
                  }}
                /></li>
                })}
                <Divider style={{ marginTop: "5px" }}></Divider>
              </ul>
            </div>
          </div>
        </div>

        <div className="logo-logo">
          <div className="logo">
            <div className="cata-btn">
              <Button
                onClick={() => {
                  handleOpenAddPlatformLogo();
                }}
                variant="contained"
              >
                Add Platform Logo
              </Button>
            </div>

            <Divider style={{ marginTop: "5px" }}></Divider>

            <div className="cata-list">
            {Platforms?.map((plat,id)=> (
              <div className="log-div" key={id}>
                {/* {console.log(plat)} */}
                <img
                  src={plat.platformUrl}
                  alt="platform-logo"
                />
                <DeleteIcon
                  onClick={(e) => {
                    PlatformDeleteHandler(e,plat.platformName);
                  }}
                  className="del-cata"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "  rgb(184, 180, 180)",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    verticalAlign: "bottom",
                  }}
                />
                <span>{plat.platformName}</span>
              </div>
            ))}
              {/* 
              <div className="log-div">
                <img
                  src="https://play-lh.googleusercontent.com/AZW3Q9fPfsjhJncEpiAEsfteaz3pep88Tfy2-sjjf4Ib7wfM0M6B0TcRuW3-JJsS2oVz"
                  alt="platform-logo"
                />
                <DeleteIcon
                  onClick={() => {
                    handleOpenDeleteLogo(true);
                  }}
                  className="del-cata"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "  rgb(184, 180, 180)",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    verticalAlign: "bottom",
                  }}
                />
              </div>
              <div className="log-div">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                  alt="platform-logo"
                />
                <DeleteIcon
                onClick={() => {
                    handleOpenDeleteLogo(true);
                  }}
                  className="del-cata"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    backgroundColor: "  rgb(184, 180, 180)",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    verticalAlign: "bottom",
                  }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* add catagory dialog */}
      <Dialog
        open={isAddCatagoryOpen}
        onClose={handleCloseAddCatagory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "200px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Do you want to add a catagory ?
            </Typography>
            <input
              type="text"
              placeholder="Enter Catagory"
              style={{
                width: "300px",
                margin: "auto",
                height: "40px",
                borderRadius: "5px",
                fontSize: "18px",
                paddingLeft: "5px",
                border: "1px solid rgb(184, 180, 180)",
              }}
              onChange = {(e)=> setCategory(e.target.value)}
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                onClick={handleCloseAddCatagory}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={AddCategoryHandler}
                variant="contained"
                sx={{ backgroundColor: "#0bb980", width: "50px" }}
              >
                Add
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* delete catagory */}
      <Dialog
        open={isCatagoryDelete}
        onClose={handleCloseCatagoryDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "160px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Are you sure, you want to delete the catagory?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseCatagoryDelete}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleCloseCatagoryDelete();
                }}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* add platform logo */}
      <Dialog
        open={isPlatformOpen}
        onClose={handleCloseAddPlatformLogo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "250px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Enter Platform logo's Url

              <input
                type="text"
                placeholder="Enter platform name... ex-udemy,pluralsight..."
                style={{
                  width: "300px",
                  margin: "auto",
                  height: "40px",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                  border: "1px solid rgb(184, 180, 180)",
                  marginTop: "20px",
                }}
                onChange={(e)=>{setplatformName(e.target.value)}}

              />
              <input
                type="text"
                placeholder="Enter Logo's Url"
                style={{
                  width: "300px",
                  margin: "auto",
                  height: "40px",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                  border: "1px solid rgb(184, 180, 180)",
                  marginTop: "20px",
                }}

                onChange={(e)=>{setplatformUrl(e.target.value)}}
              />
               
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseAddPlatformLogo}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={PlatformAddHandler}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Add
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>


      {/* delete logo */}
      <Dialog
        open={isLogoDeleteOpen}
        onClose={handleCloseDeleteLogo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "160px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Are you sure, you want to delete the logo ?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseDeleteLogo}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                    handleCloseDeleteLogo();
                }}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>
    </>
  );
}

export default Catagory;
