import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';

function AdminSignUp() {
    const [email, setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    async function submitAction (){
        try{
            const response = await fetch('http://localhost:3000/admin/signup',
            {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    username:email,
                    password:password
                }),
                credentials: 'include'
            }
            );
            const result = await response.json();
            localStorage.setItem("token",result.token);
        }
        catch(error){
            console.log(error);
        }
    }


    return <>
        <div style={{
            display: "flex",
            justifyContent: 'center',
            padding: '70px',
        }}>
            <h3 style={{
                fontFamily: 'Arial',
                fontSize: '30px'
            }}>Welcome To The Admin SignUp Page!</h3>
        </div>
        <div style={{
            display: "flex",
            justifyContent: 'center',
        
        }}>
            <Card variant="outlined" style={{
                width: "400px",
                height: '300px',
                borderRadius: "5px",
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                backgroundColor:'#ffffff'


            }}> <h4 style={{
                fontFamily: 'Arial',
                fontSize: '20px'
            }}>ENTER YOUR DETAILS</h4>
                <TextField 
                onChange={(e) =>{
                    setEmail(e.target.value);
                }}
                 id="outlined-basic" 
                 label="Email" variant="outlined" 
                 sx={{ width: "400px",
                  height: "50px" }} />

                <TextField 
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                id="outlined-basic" 
                label="password" variant="outlined" 
                sx={{ width: "400px", height: "50px",
                 marginTop: '20px' }} />

                <Button style={{
                    marginTop: '30px'
                }} variant="contained" onClick={()=>{
                    submitAction();
                }}>submit</Button>
            </Card>
        </div>
    </>
}


export default AdminSignUp