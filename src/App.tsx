import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Login from './page/login/login';
import Main from './page/main/main';
import Register from './page/login/register';
import Navbar from './components/navbar';
import MainLayout from './layout/mainLayout';
import { Test } from './page/test/test';
import { ConfigProvider } from 'antd';
import Profile from './page/profile/profile';
import Feed from './page/main/components/feed';


function App() {

const location = useLocation()




  return (
    <>
      <Routes>
        <Route path={`/`} element={<Login/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/`} element={<MainLayout/>}>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/profile' element={<Profile/>}>
          <Route path='/profile' element={<Feed/>}></Route>
          <Route path='/profile/photo' element={<h1 className=''>photo</h1>}></Route>
          <Route path='/profile/follower' element={<h1 className=''>follower</h1>}></Route>
          <Route path='/profile/more' element={<h1 className=''>more</h1>}></Route>
          </Route>

        </Route>

        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </>
  );
}

export default App;
