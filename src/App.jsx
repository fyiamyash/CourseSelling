import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import AdminSignUp from './AdminSignUp'
import MyAppBar from './MyAppBar'
import AdminLogIn from './AdminLogIn';
import AddCourse from './AddCourse';
import Courses from './Courses';
import UserSignUp from './UserSignUp';
import UserLogIn from './UserLogIn';
import CoursesForUser from './CoursesForUser';
import PurchsedCourses from './PurchasedCourses';



function App() {
  

  return (
    <div style={{
      width:'100vw',
      height: '100vh ',
      backgroundColor:'#e7f0fa',
      alignItems: 'center',
      
    }}>
     
      <Router>
      <MyAppBar />
        <Routes>
          <Route path={"/addcourse"} element ={<AddCourse />} />
          <Route path={"/courses"} element = {<Courses />} />
          <Route path={"/signup"} element ={<AdminSignUp />} />
          <Route path= {"/login"} element = {<AdminLogIn/>} />
          <Route path={"/userSignUp"} element ={<UserSignUp />} />
          <Route path={"/userLogIn"} element = {<UserLogIn />} />
          <Route path={"/userCourses"} element = {<CoursesForUser />} />
          <Route path ={"/purchasedCourses"} element = {<PurchsedCourses />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
