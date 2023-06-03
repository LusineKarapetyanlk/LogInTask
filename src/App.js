
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header.jsx';
import Navbar from './Pages/Navbar/Navbar.jsx';
import MyPage from './Pages/MyPage/MyPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Messages from './Pages/Messages/Messages';
import Settings from './Pages/Settings/Settings';
import DetailComponent from './Pages/HomePage/Details/Details';
import LogInComponent from './AuthComponent/LogIn_component';
import RegisterComponent from './AuthComponent/Register_component';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function App() {

  // const navigate = useNavigate()
  // useEffect(()=>{
    
  //  return <Link to="sign-up"></Link>
  //   // navigate('/sign-in') chem karox estex navigate anel?
  // },[])
 const dispatch = useDispatch()
 const previouseState = useSelector(state => state.logIn)
 console.log(previouseState)
  return (
    <>
     <div className="app-wrapper">
        <Header /> 
        <Navbar />
        <div className="app-wrapper-content"> 
            <Routes >
              <Route path='/' element={<HomePage />} />
              <Route path='/details/:id' element={<DetailComponent />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/messages' element={<Messages />} />
              <Route path='/settings' element={<Settings />} />
            </Routes> 
          
        </div>
      </div>
      <Routes>
        <Route path='/sign-in'element={<LogInComponent/>}/>
        <Route path='/sign-up'element={<RegisterComponent/>}/>
      </Routes>
   
    </>
  
  );
}

export default App;
