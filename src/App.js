
import { Route, Routes, redirect, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header.jsx';
import Navbar from './Pages/Navbar/Navbar.jsx';
import MyPage from './Pages/MyPage/MyPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Messages from './Pages/Messages/Messages';
import Settings from './Pages/Settings/Settings';
import DetailComponent from './Pages/HomePage/Details/Details';
import LogInComponent from './AuthComponent/LogIn_component';
import RegisterComponent from './AuthComponent/registration/Register_component';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './store/logIn';


function App() {

 const dispatch = useDispatch()
 const {user,loading} = useSelector(state => state.login)
 const state = useSelector(state => state)

  useEffect(()=>{

      setTimeout(()=>{
        dispatch(getUser()) 
      },3000)
  
  },[])

  const navigate = useNavigate()
  useEffect(()=>{
      if(!loading && user === null){
        navigate("/sign-in")
      }
  },[loading,user])

console.log(user)

  return (
    <>
      <div className="app-wrapper">
        {loading  
        ? <div>loading</div> : !user ?
            <Routes>
                <Route exact path='/sign-in'element={<LogInComponent/>}/>
                <Route exact path='/sign-up'element={<RegisterComponent/>}/>
            </Routes>
         : <> 
            <Header /> 
            <Navbar />
            <div className="app-wrapper-content"> 
                <Routes >
                  <Route exact path='/' element={<HomePage />} />
                  <Route exact path='/details/:id' element={<DetailComponent />} />
                  <Route exact path='/mypage' element={<MyPage />} />
                  <Route exact path='/messages' element={<Messages />} />
                  <Route exact path='/settings' element={<Settings />} />
                </Routes>
            </div>
          </>
        } 
          
      </div>
    </>
  
  );
}

export default App;
