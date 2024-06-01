import React, {Dispatch, createContext, useContext, useReducer } from "react"
import { userReducer } from "./userReducer";
import { IUser, userAction } from "./type.user";




const username:any  = localStorage.getItem("username")
const userId:any = localStorage.getItem("userId")
const initialState:IUser= {
    username : username,
    userid : userId, 
    user : {},
    loading : false,
  }


  export const UserContext = createContext<{
    state:IUser,
    dispatch : Dispatch<userAction>
   } | null>({state: initialState , dispatch:()=> null}) 
  


const UserProvider:React.FC<{children:React.ReactNode}> = ({children})=> {
     const [state ,dispatch] = useReducer(userReducer ,initialState)
     return <UserContext.Provider value={{state ,dispatch}}>
        {children}
     </UserContext.Provider>
}

export default UserProvider
const useUserContext = ()=> useContext<any>(UserContext)