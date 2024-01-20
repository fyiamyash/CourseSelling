import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function MyAppBar()
{
  const navigate = useNavigate();
  const [currentEmail,setCurrentEmail] = useState('');

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const response = await fetch("http://localhost:3000/admin/me", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
          }
        });
        const result = await response.json();
        if(result)
        {
          setCurrentEmail(data.username);
          console.log(result);
        }
        else{
          setCurrentEmail('');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);   
  if(currentEmail)
  {
    return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COURSES
          </Typography>
    
         <Button color="inherit" onClick={() =>{
          localStorage.setItem("token",null);
          navigate("/login");
          //  window.location.href = 'http://localhost:5173/login';
         }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  }
    return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COURSES
          </Typography>
         
          <Button color="inherit" onClick={() =>{
          //  window.location.href = 'http://localhost:5173/signup';
          navigate("/signup");
         }}>signup</Button>

         <Button color="inherit" onClick={() =>{
          navigate("/login");
          //  window.location.href = 'http://localhost:5173/login';
         }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
}
export default MyAppBar;