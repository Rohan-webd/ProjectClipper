import React , {useContext, useState,useEffect} from "react";

import {useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Pages/Navbar";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthContext } from "../context/authContext";
import {gapi} from 'gapi-script';
import Google from "@mui/icons-material/Google";
import Login from "./Components/Google/Login";
import Logout from "./Components/Google/Logout";
// import { useAuthContext } from "../context/useAuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function SignIn() {


  

  
  const [loading , setisLoading] = useState(false);
  const [Error , setisError] = useState(false);
  
  const {dispatch} = useContext(AuthContext);
  const [Email , setEmail] = useState('');
  const [Password , setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const data = {
        email : Email,
        password : Password,
        googleId : ""
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      const response = await fetch('http://localhost:3001/signin',requestOptions);
      const data_res = await response.json();
      if(response.ok){
        console.log(data_res);
        localStorage.setItem("User",JSON.stringify(data_res));
        setEmail('');
        setPassword('');
        dispatch({type : 'LOGIN' , payload : data_res});
        setisLoading(false);
        navigate("/review");
      }
      else{
        setisLoading(true);
        setisError(true);
        console.log("NOT AUTHENTICATED");
      }

    }
    catch(err){
      console.log(err);
    }

  };

  return (
    <>
      <Navbar />
      {Error && <div >"ERROR IN LOGIN"</div>}
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginBottom: "50px",
              marginTop: "58px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value={Email}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=> setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={Password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=> setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ background: "#0BB980" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" style={{ color: "#0BB980" }} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" style={{ color: "#0BB980" }} variant="body2" onClick={()=>navigate("/signup")}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Grid style={{textAlign:"center"}}>
              <Login />
              {/* <Logout /> */}
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
