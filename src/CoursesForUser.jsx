import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import CustomUserAppBar from './CustomUserAppBar';
import Alert from '@mui/material/Alert';

function CoursesForUser()
{
    const [courses, setCourses] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(()=>{
        async function fetchCourses(){
            try{
            const response = await fetch("http://localhost:3000/users/courses",{
                method:"GET",
                headers:{
                    "Authorization":"Bearer " + localStorage.getItem("token"),
                }
            });
            const result = await response.json();
            setCourses(result.course);
        }catch(error)
        {
            console.log(error);
        }
        }
        fetchCourses();
      },[]);
      async function  purchase(courseId)
      { 
        try{
          const response2 = await fetch("http://localhost:3000/users/courses/" + courseId,{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
              "Authorization":"Bearer " + localStorage.getItem("token")
          }
          });
          const result2 = await response2.json();
          setShowAlert(true);
        }catch(error)
        {
          console.log(error)
        }
      }
    function CardCompCourse(props){
        return<>
        <Card sx={{ width:300,
        margin: '0 10px 20px 0',
       }} key={props.course.uniqueKey} >
      <CardMedia
        sx={{ height: 80}}
        image= {props.course.imageLink}
      />
      <CardContent key={props.course.id}>
        <Typography gutterBottom variant="h5" component="div">
         {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">${props.course.price}</Button>
        <Button size="small" onClick={()=>{
          purchase(props.course.id);
        }}>buy</Button>
      </CardActions>
    </Card>
        </>
    }
    return <>
    <CustomUserAppBar />
      <div style={{
        padding:"20px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"centre",
        maxHeight: "500px", 
        overflowY: "auto",
        marginLeft:"60px"
      }}>
        {courses.map(course =>{
           return<CardCompCourse key={course.uniqueKey}  course ={course} />
        })}
      
    </div>
      {/* Alert component */}
      {showAlert && (
            <Alert severity="success" onClose={() => setShowAlert(false)}>
                Purchase successful!
            </Alert>
        )}
   </>

}

export default CoursesForUser;