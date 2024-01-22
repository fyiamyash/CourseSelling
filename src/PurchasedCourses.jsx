import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
  function PurchsedCourses()
  {
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    useEffect(()=>{
        async function fetchPurchasedCourse(){
            try{
                const response = await fetch("http://localhost:3000/users/purchasedCourses",{
                    method:"GET",
                    headers:{
                        "Authorization":"Bearer " + localStorage.getItem("token")
                    }
                })
                const result = await response.json();
                setPurchasedCourses(result.Courses)
                console.log(result);
            }catch(error)
            {
                console.log(error)
            }
        }
        fetchPurchasedCourse();
    },[])

    return<>
        <div style={{
        padding:"20px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
        maxHeight: "500px", 
        overflowX: "auto",
      }}>
        {purchasedCourses.map(course =>{
           return<CardCompCourse key={course.uniqueKey}  course ={course} />
        })}
      
    </div>
    </>
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

export default PurchsedCourses;