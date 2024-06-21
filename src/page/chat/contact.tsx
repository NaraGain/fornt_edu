import { PlusOutlined, UserAddOutlined } from "@ant-design/icons"
import { useNavigate, useParams, Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { GetFriend, userContact } from "../../api/friend"
import { AvatarUser } from "../../components/Avatar"
import { Button, Tabs } from "antd"
import type { TabsProps } from 'antd';
import { UserContext } from "../../auth/ProtectedRoute"
import moment from "moment"

export const Contact = () =>{
    const {type}  = useParams()
    const navigate = useNavigate()
    const userid = localStorage.getItem('friend')
    const [searchValue, setSearchValue] = useState(""); // Initialize the searchValue state variable as an empty string
    const authUser:any = useContext(UserContext)
    const handleNavigateBack = ()=>{
        localStorage.removeItem('friend')
        navigate(-1)
    }
    
    const {data , isLoading , isFetching} =
     useQuery(['contactChat', authUser?.userid], ()=>userContact({
        userid :authUser?.userid as string
     }),
    {
        enabled : authUser?.userid ? true : false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10,
    }
    )
          
    return <div className="px-2">
         <header className="p-2 py-2.5 dark:borde-b-[1px]  dark:border-zinc-500
      border-gray-300 flex justify-between items-center ">
        <h1 className="font-bold text-[18px]">
          Contact
        </h1>
      <div className="relative flex gap-2">
          <button className="flex shadow-md shadow-gray-200/55
           bg-[#7469B6] text-white  
          rounded-lg py-1 px-2 gap-2 text-[12px] items-center">
         <UserAddOutlined/>
         <p className="">Add Contact</p>
              </button>
      </div>
    </header>

    <div className="w-full my-2 px-2">
<input placeholder="search" className="w-full 
px-2 py-1.5 rounded-lg outline-none
text-[14px] border-neutral-200
dark:placeholder:text-neutral-100 text-neutral-600 bg-neutral-100"/>
  
</div>
       {/* {JSON.stringify(data?.result?.friend)} */}
       <ul className="px-2 py-1.5">
     {
        data?.result?.map((contact:any)=> <li key={contact?.userid1} >
          <Link className="flex gap-2 items-center" to={`/chat/c/${contact?.Initiator ? contact?.Initiator.username 
                    :contact?.Receiver?.username}`}>
                <AvatarUser size={35} 
                    src={contact.Initiator? contact?.Initiator?.userInfoInstance?.profile_url 
                    : contact?.Receiver?.userInfoInstance?.profile_url }/>
                    <div>
                    <p className="text-[16px] truncate tracking-wide">{contact?.Initiator ? contact?.Initiator.username 
                    :contact?.Receiver?.username }</p>
                    <p className="text-neutral-300 text-[10px]">
                      {moment(contact.created_at).fromNow()}</p>
                    </div>
                   </Link> 

            </li>
            )
     }
     </ul>
    </div>
}