import React, { createContext, useEffect, useState } from "react"
import { userProfile } from "../api/user"
import { message } from "antd"
import { useMutation, useQuery, useQueryClient } from "react-query"


interface ProtecedRoute  {
    children : React.ReactNode
}

export const UserContext = createContext(null)

export function ProtecedRoute({ children }: ProtecedRoute) {
    const [messageApi , contextHolder] = message.useMessage()
    const token = localStorage.getItem('TOKEN')
    const userid:any = localStorage.getItem('userId')
  
  
    
    const { data: userData, error, isLoading, isError } 
    = useQuery(['userProfile', userid], () => userProfile({
        userId : userid}), 
        {
            enabled : token ? true : false,
            staleTime: 1000 * 60 * 5, // 5 minutes
            cacheTime: 1000 * 60 * 10, // 10 minutes
            keepPreviousData : true,
        }       
    );

  
    return <React.Fragment> <UserContext.Provider value={userData?.result}>
        {contextHolder}
        {
        token ? children : window.location.href = "/login"
        }
     </UserContext.Provider>
</React.Fragment>
}