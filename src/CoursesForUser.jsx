import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
function CoursesForUser()
{
    const [courses, setCourses] = useState([]);

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
          console.log(result2);
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
      <div style={{
        padding:"20px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
        maxHeight: "500px", 
        overflowX: "auto",
      }}>
        {courses.map(course =>{
           return<CardCompCourse key={course.uniqueKey}  course ={course} />
        })}
      
    </div>
   </>

}

export default CoursesForUser;