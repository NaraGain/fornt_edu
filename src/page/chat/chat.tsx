import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import { UserContext } from "../../auth/ProtectedRoute"
import { Input } from "antd"
import io from "socket.io-client"
import { baseReactQueryInstance } from "../../api"
import { Conversation } from "./conversation"
import { Outlet, useParams } from "react-router-dom"
import { LeftBar } from "./leftBar"
import { Messages } from "./type/chat.type"
import { Group } from "./type/chat.type"
import { Message } from "./meessage"

interface stateChat  {
  isSelected : boolean,
}


type Action = {type : "ISSELECTED", payload: boolean}

const initialState:stateChat ={
      isSelected : false
}

export const ChatContext = createContext<{
  state: stateChat,
  dispatch : React.Dispatch<Action>
}>({
  state : initialState,
  dispatch : ()=> null,
})


const reducer = (state:stateChat , action:Action):stateChat =>{
  switch (action.type){
      case 'ISSELECTED':
          return {...state , isSelected : action.payload}
      
          default :
  return state
  }
  
}




export const Chat = () => {
    const [state , dispatch] = useReducer(reducer , initialState)
    return <ChatContext.Provider value={{state ,dispatch}}> 
            <div className="flex bg-neutral-100 h-screen overflow-hidden">
                <LeftBar/>
    
                <div
              className="w-[23%] 
              bg-white shadow-sm
              shadow-gray-50/90 dark:bg-zinc-800
              dark:border-zinc-700">
                  <Outlet/>
            </div>
            <div className="md:flex  rounded-r-md
              w-full bg-neutral-50/100 md:justify-between 
            dark:bg-zinc-700 md:flex-col  md:flex-1 ">
            <Message/>
            </div>
                  </div>
    
       </ChatContext.Provider>
}