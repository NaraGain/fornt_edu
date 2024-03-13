import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Login from './page/login/login';
import {Home} from './page/main/home';
import Register from './page/login/register';
import MainLayout from './layout/mainLayout';
import { Test } from './page/test/test';
import Profile from './page/profile/profile';
import Feed from './page/main/components/feed';
import { Course } from './page/course/course';
import { Fravorite } from './page/fravorite/fravorite';
import { Library } from './page/library/library';
import { Classes } from './page/class/class';
import { About } from './page/about/about';


function App() {

const location = useLocation()




  return (
    <>
      <Routes>
        <Route path={`/`} element={<Login/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/`} element={<MainLayout/>}>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}>
          <Route path='/profile' element={<Feed/>}></Route>
          <Route path='/profile/photo' element={<h1 className=''>photo</h1>}></Route>
          <Route path='/profile/follower' element={<h1 className=''>follower</h1>}></Route>
          <Route path='/profile/more' element={<h1 className=''>more</h1>}></Route>
          </Route>

          <Route path='/course' element={<Course/>}></Route>
          <Route path='/favorite' element={<Fravorite/>}></Route>
          <Route path='/library' element={<Library></Library>}></Route>
          <Route path='/class' element={<Classes/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </>
  );
}

export default App;
