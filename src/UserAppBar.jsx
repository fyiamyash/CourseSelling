import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function UserAppBar()
{
  const navigate = useNavigate();
    return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COURSES
          </Typography>
         
          <Button color="inherit" onClick={() =>{
          //  window.location.href = 'http://localhost:5173/signup';
          navigate("/userSignUp");
         }}>signup</Button>

         <Button color="inherit" onClick={() =>{
          navigate("/userLogIn");
          //  window.location.href = 'http://localhost:5173/login';
         }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
}
export default UserAppBar;