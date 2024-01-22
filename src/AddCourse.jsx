import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
function AddCourse() {
    const navigate = useNavigate();
    const [description, setDescription] = React.useState('');
    const [published, setPublished] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [imageLink, setImageLink] = React.useState('');

    function submitCourse() {
        async function createCourse() {
            try {
                const response = await fetch("http://localhost:3000/admin/courses", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token"),

                    },
                    body: JSON.stringify({
                        "title": title,
                        "description": description,
                        "price": price,
                        "imageLink": imageLink,
                        "published": published,
                    })

                });
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        createCourse();
        navigate("/courses");

    }


    return <>
        <div style={{
            display: "flex",
            justifyContent: 'center',
            padding: '30px',
            fontFamily: 'fantasy'
        }}>
        </div>
        <h2 style={{
            display: "flex",
            justifyContent: 'center',

        }}>Add details Of The Course</h2>
        <div style={{
            display: "flex",
            justifyContent: 'center',

        }}>
            <Card variant="outlined" style={{
                width: "600px",
                height: '400px',
                borderRadius: "5px",
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'Column',
                alignItems: "flex-start",
                backgroundColor: 'mint-blue', justifyContent: "space-between"


            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <TextField id="outlined-basic" onChange={(e) => {
                        setTitle(e.target.value);
                    }} label="TITLE OF COURSE" variant="outlined" sx={{
                        width: "350px",
                    }} />
                    <TextField id="outlined-basic" onChange={(e) => {
                        setPublished(e.target.value);
                    }} label="PUBLISHED" variant="outlined" sx={{
                        width: "250px",
                    }} />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        label="DESCRIPTION"
                        multiline
                        rows={4}
                        defaultValue=""
                        sx={{
                            width: "600px",
                        }}
                    />
                </div>
                <div>
                    <TextField id="outlined-basic" onChange={(e) => {
                        setPrice(e.target.value)
                    }} label="price" variant="outlined" sx={{
                        width: "250px",
                    }} />
                    <TextField id="outlined-basic" onChange={(e) => {
                        setImageLink(e.target.value);
                    }} label="imageLink" variant="outlined" sx={{
                        width: "250px",
                        marginLeft: "100px"
                    }} />
                </div>
                <div>

                    <Button style={{
                        width: "300px",
                        marginLeft: "150px"
                    }} variant="contained" onClick={() => {
                        submitCourse();
                    }}>submit</Button>

                </div>


            </Card>
        </div>
    </>
}
export default AddCourse;