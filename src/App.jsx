import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminSignUp from './AdminSignUp'
import MyAppBar from './MyAppBar'
import AdminLogIn from './AdminLogIn';
import AddCourse from './AddCourse';
import Courses from './Courses';




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
        </Routes>
      </Router>
    </div>
  )
}

export default App
