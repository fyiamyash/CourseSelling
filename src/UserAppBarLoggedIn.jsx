import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function UserAppBarLoggegIn(){

    const navigate = useNavigate();
    const [currentEmail, setCurrentEmail] = useState('');
    useEffect(()=>{
     fetch("http://localhost:3000/user/me",{
        method:"GET",
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
     }).then((response)=>{
        response.json().then((result)=>{
            console.log(result.username);
            setCurrentEmail(result.username);
            
        })
     })
    },[])

    if (currentEmail) {
        return <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            COURSES
                        </Typography>

                        <Button color="inherit" onClick={() => {
                            navigate("/purchasedCourses");
                        }}>My Course</Button>

                        <Button color="inherit" onClick={() => {
                            localStorage.setItem("token", null);
                            navigate("/login");
                            //  window.location.href = 'http://localhost:5173/login';
                        }}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    }

}

export default UserAppBarLoggegIn;