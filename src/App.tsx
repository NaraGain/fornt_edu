import React, { useContext, useEffect, useReducer } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Login from './page/login/login';
import {Home} from './page/home/home';
import Register from './page/login/register';
import MainLayout from './layout/mainLayout';
import { Test } from './page/test/test';
import Profile from './page/profile/profile';
import Feed from './page/home/components/PostCard';
import { Course } from './page/course/course';
import { Fravorite } from './page/fravorite/fravorite';
import { Library } from './page/library/library';
import { Classes } from './page/class/class';
import { About } from './page/about/about';
import { Explore } from './page/explore/explore';
import { NotificationPage } from './page/notification/notification';
import { ProtecedRoute } from './auth/ProtectedRoute';
import { Preview } from './page/preview/preview';
import { LoaderPage } from './components/loader/loaderPage';
import { EditProfile } from './page/profile/editProfile';




function App() {

const location = useLocation()

const loading = false
  return (
    <>
    {loading ?  <LoaderPage/> : <></>}
      <Routes>
        <Route path={`/`} element={<Login/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/`} errorElement={<>Error</>} 
        element={<ProtecedRoute><MainLayout></MainLayout></ProtecedRoute>}>
          <Route path='/home' element={<ProtecedRoute><Home/></ProtecedRoute>}></Route>
          <Route path='/p/:username/:tab' element={<Profile/>}></Route>
          <Route path='/u' element={<EditProfile/>}></Route>

          <Route path='/course' element={<Course/>}></Route>
          <Route path='/explore' element={<Explore/>}></Route>
          <Route path='/favorite' element={<Fravorite/>}></Route>
          <Route path='/library' element={<Library></Library>}></Route>
          <Route path='/class' element={<Classes/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/notification' element={<NotificationPage/>}></Route>
          <Route path='/pv' element={<Preview></Preview>}></Route>
        </Route>
       
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
   </>
  );
}

export default App;
