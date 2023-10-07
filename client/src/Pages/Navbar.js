import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { Drawer, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Dialog from "@mui/material/Dialog";
import Rating from "@mui/material/Rating";
import Axios from "axios";
import { AuthContext } from "../context/authContext";
import Google from "@mui/icons-material/Google";
import Logout from "./Components/Google/Logout";

function Navbar() {
  const navigate = useNavigate();
  const {dispatch , user} = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dialoglOpen, setDialogOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [authenticated , setisAuthenticated] = useState(false);
  const [GoogleAuth , setGoogleAuth] = useState(false);
  const [GoogleId , setGoogleId] = useState('');
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);
  const handleOpenLogin = () => setLoginOpen(true);
  const handleCloseLogin = () => setLoginOpen(false);
  
  
  useEffect(()=>{
  const data_res = JSON.parse(localStorage.getItem("User"));
  console.log(data_res);
  if(data_res){
    dispatch({type : 'LOGIN' , payload : data_res});
    if(data_res.googleId){
      setGoogleAuth(true);
      setGoogleId(data_res.googleId);
    }
    else{
      setisAuthenticated(true);
    }
    console.log(user);
  }
  else{
    setisAuthenticated(false);
  }
}, [dispatch]);


  const { handleSubmit: handleSubmitAdmin, control: controlAdmin } = useForm();

  const customSubmitFunction = (data) => {
    console.log(data);
    if (
      data.username === "xtzt092@#14pqnz" &&
      data.password === "478420478457"
    ) {
      localStorage.setItem("AdminCondition", "true");
      navigate("/admin");
    }
  };
  const LogOutHandler = () =>{
  localStorage.removeItem("User");
  dispatch({type : 'LOGOUT'});
  navigate("/signin");
  }
  const test = [
    {
      route: "Home",
      routeName: "/",
    },
    {
      route: "About Us",
      routeName: "/about",
    },
    {
      route: "Reviews",
      routeName: "/review",
    },
    {
      route: "Compare Course",
      routeName: "/comparison",
    },
    {
      route: "Blogs",
      routeName: "/blog",
    },
    {
      route: "Privacy Policy",
      routeName: "/privacy",
    },
    {
      route: "Contact Us",
      routeName: "/contact",
    },
    {
      route: "Terms & Conditions",
      routeName: "/term",
    },
  ];

  const list = (anchor) => (
    <Box>
      <List>
        {test.map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => {
              navigate(text.routeName);
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.route} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <Box style={{ marginTop: "10px", width: "230px" }}>
        {(authenticated || GoogleAuth) && <Button
          style={{
            fontSize: "17px",
            color: "white",
            backgroundColor: "#0BB980",
          }}
          onClick={handleOpen}
        >
          Add Reviews <AddCircleIcon />
        </Button>}
      </Box>

      <Box style={{ marginTop: "10px", width: "230px" }}>
        {!authenticated && !GoogleAuth &&  <Button
          style={{
            fontSize: "10px",
            color: "white",
            backgroundColor: "red",
            width: "10rem",
            textTransform: "capitalize",
            fontSize: "0.8rem",
          }}
          onClick={handleOpenLogin}
        >
          Admin Login
        </Button>}

      </Box>

      <Box style={{ marginTop: "10px", width: "230px" }}>
        {!authenticated && !GoogleAuth && <Button
          variant="contained"
          style={{
            fontSize: "10px",
            // color: "white",
            // backgroundColor: "red",
            width: "10rem",
            textTransform: "capitalize",
            fontSize: "0.8rem",
          }}
          onClick={()=>{navigate("/signin")}}
        >
          Sign Up
        </Button>}
        </Box>

        <Box style={{ marginTop: "10px", width: "230px" }}>
        {authenticated && <Button
          variant="contained"
          style={{
            fontSize: "10px",
            // color: "white",
            // backgroundColor: "red",
            width: "10rem",
            textTransform: "capitalize",
            fontSize: "0.8rem",
          }}
          onClick={LogOutHandler}
        >
          Log Out
        </Button>}
        {GoogleAuth && <Logout />}
        </Box>
    </Box>
  );

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const finalData = { ...data, Rating: value , googleId : GoogleId};
    console.log(finalData);
    Axios.post("http://localhost:3001/reviews", finalData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <div className="home-top-bar">
      
      <button
        className="home-top-bar-section logo-section"
        style={{ background: "none", border: "none" }}
        onClick={() => {
          navigate("/");
        }}
      >
        courseClipper
      </button>
      
      <div className="home-top-bar-section button-section">
        {/* <input
          type="text"
          id="navbar-search-box"
          style={{ paddingLeft: "17px" }}
          placeholder="Search Course..."
        /> */}
        
        <Button
          id="navbar-rev"
          variant="outlined"
          onClick={() => {
            navigate("/review");
          }}
        >
          REVIEW
        </Button>
        {user && <span>{user?.email}</span>}
        <Button
          onClick={() => {
            setIsDrawerOpen(true);
          }}
        >
          <MenuIcon style={{ color: "#707070", fontSize: "3.5rem" }} />
        </Button>
      </div>

      {/* drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="265px" textAlign="center" role="presentation">
          {list()}
        </Box>
      </Drawer>

      {/*add reviews Dialog box */}
      <Dialog
        open={dialoglOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="dialog-box">
          <div className="main-div-dialog">
            <Box className="dialog-sub-box" style={{ lineHeight: "0" }}>
              <h4>Rate Your Recent Experience</h4>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  console.log(newValue);
                }}
              />
              <h4>Tell Us More About Your Exerience</h4>
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="dialog-sub-box" style={{ lineHeight: "0" }}>
                <h4>
                  <a href="/privacy">Read Our Guidelines for Reviewers</a>
                </h4>
                <Controller
                  name="courseDescription"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="course-description"
                      rows="4"
                      style={{
                        width: "325px",
                        borderRadius: "5px",
                        border: "1px solid grey",
                      }}
                    />
                  )}
                />
                <h4>
                  <a href="/review">How to write a useful review</a>
                </h4>
              </Box>

              <div className="dialog-sub-box">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="your-name">Enter Your Name</label>
                  <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="your-name"
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="email">Enter Your Email Id</label>
                  <Controller
                    name="emailId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="email"
                        id="email"
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="course-name">Enter Your Course Name</label>
                  <Controller
                    name="courseName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="course-name"
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="platform-name">
                    Select your platform name
                  </label>
                  <Controller
                    name="platformName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      // <input
                      //   {...field}
                      //   type="text"
                      //   id="platform-name"
                      // style={{
                      //   width: "325px",
                      //   height: "35px",
                      //   borderRadius: "5px",
                      //   border: "1px solid grey",
                      // }}
                      // />

                      <select
                        {...field}
                        id="platform-name"
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                          fontSize:"15px"
                        }}
                      >
                        <option value="Udemy">Udemy</option>
                        <option value="Pluralsight">Pluralsight</option>
                        <option value="Coursera">Coursera</option>
                        <option value="Skillshare">Skillshare</option>
                        <option value="Udacity">Udacity</option>
                        <option value="Codeacademy">Codeacademy</option>
                        <option value="Khanacademy">Khanacademy</option>
                        <option value="Sololearn">Sololearn</option>
                        <option value="Others">Others</option>
                      </select>
                    )}
                  />
                </div>


                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="catagory-name">
                    Select your course catagory
                  </label>
                  <Controller
                    name="catagoryName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      // <input
                      //   {...field}
                      //   type="text"
                      //   id="platform-name"
                      // style={{
                      //   width: "325px",
                      //   height: "35px",
                      //   borderRadius: "5px",
                      //   border: "1px solid grey",
                      // }}
                      // />

                      <select
                        {...field}
                        id="catagory-name"
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                          fontSize:"15px"
                        }}
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="Programming Languages">Programming Languages</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Software Development Tools">Software Development Tools</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Others">Others</option>
                      </select>
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="course-url">Enter Course URL</label>
                  <Controller
                    name="courseURL"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="course-url"
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="purchase-date">Enter purchased date</label>
                  <Controller
                    name="purchaseDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        id="purchase-date"
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>
              </div>
              <div style={{ margin: "29px 120px 0px" }}>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: "rgb(9, 143, 96)", width: "100px" }}
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Dialog>

      {/* login form dialog box */}
      <Dialog
        open={loginOpen}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="login-dialog"
          style={{ width: "350px", height: "300px" }}
        >
          <form onSubmit={handleSubmitAdmin(customSubmitFunction)}>
            <div className="main-lgn">
              <div className="login-text">Login Form</div>
              <div className="input-1-box">
                <label htmlFor="username">Username</label>
                <Controller
                  name="username"
                  control={controlAdmin}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      id="username"
                      className="blah"
                      required
                      placeholder="Enter Your Username"
                    />
                  )}
                />
              </div>
              <div className="input-2-box">
                <label htmlFor="password">Password</label>
                <Controller
                  name="password"
                  control={controlAdmin}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      id="password"
                      className="blah"
                      required
                      placeholder="Enter Your Password"
                    />
                  )}
                />
              </div>
              <div className="lgn-btn">
                <Button type="submit">Login</Button>
              </div>
            </div>
          </form>
        </Box>
      </Dialog>
    </div>
  );
}

export default Navbar;
