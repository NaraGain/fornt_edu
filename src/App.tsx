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
import { Friend } from './page/friend/Friend';
import { Chat } from './page/chat/chat';
import { Message } from './page/chat/meessage';
import { Contact } from './page/chat/contact';
import { Group } from "./page/chat/group"
import { Conversation } from './page/chat/conversation';
import { PrivateChat } from './page/chat/privateChat';
import { Active } from './page/chat/active';




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
        <Route path={`/chat`} element={<ProtecedRoute><Chat/></ProtecedRoute>}>

        <Route path={`/chat/c/`}  element={<ProtecedRoute><Contact/></ProtecedRoute>}></Route>
        <Route path={`/chat/c/:name`}  element={<ProtecedRoute><Contact/></ProtecedRoute>} ></Route>

        <Route path='/chat/a/' element={<ProtecedRoute><Active/></ProtecedRoute>}></Route>
        <Route path='/chat/a/:name' element={<ProtecedRoute><Active/></ProtecedRoute>}></Route>

        <Route path={`/chat/g/`} element={<ProtecedRoute><Group></Group></ProtecedRoute>}></Route>
        <Route path={`/chat/g/:name`} element={<ProtecedRoute><Group></Group></ProtecedRoute>}></Route>

        <Route path={'/chat/p/'} element={<PrivateChat/>}></Route>
        <Route path={'/chat/p/:name'} element={<PrivateChat/>}></Route> 
        </Route>
       

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

          <Route path='/f/:type' element={<Friend/>}/>
        </Route>
       
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
   </>
  );
}

export default App;
