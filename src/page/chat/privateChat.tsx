import { useContext, useEffect, useState } from "react"
import { baseReactQueryInstance } from "../../api"
import { LeftCircleOutlined,SearchOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { AvatarUser } from "../../components/Avatar"
import { UserContext } from "../../auth/ProtectedRoute"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { ChatContext } from "./chat"
import { useQuery } from "react-query"
import { getChat } from "../../api/chat"
import moment from "moment"
export const PrivateChat = () => {
    const [conversation ,setConversation] = useState<any[]>([])
    const authUser:any = useContext(UserContext)
    const {state , dispatch} = useContext(ChatContext)
    const navigate = useNavigate()
    const {name} = useParams()
    
    const {data:chat , isLoading , isFetching} = useQuery(['chatConversation', authUser?.username], ()=> getChat({
      username : authUser?.username
    }),
    {
      enabled : authUser?.username ? true : false,
      staleTime : 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    }
  )


  

    const getConversation = async () => {
        try {
          const conversation = await baseReactQueryInstance.post(`group`,{
            groupId : `ec303b4f-72e5-46f5-9a44-a542afe4b785`
          })
    
          setConversation(conversation?.data?.result)
    
        } catch (error) {
          
        }
      }

    const handleSelectConversation = (gId:string) => {
        dispatch({type: "ISSELECTED", payload : true})
        navigate(`/chat/p/${gId}`)
    }

    useEffect(()=>{
        getConversation()
    },[])  

    return <div className="flex flex-col justify-between h-screen md:flex-1 ">
    <header className="px-2 mx-2 py-2.5 dark:borde-b-[1px]  dark:border-zinc-500
      border-gray-300 flex justify-between items-center ">
        <h1 className="font-bold text-[18px]">
          Chat
        </h1>
      <div className="relative flex gap-2">
          <button className="flex shadow-md shadow-gray-200/55 bg-[#7469B6] text-white  
          rounded-md py-1 px-2 gap-2 text-[12px] items-center">
          <PlusOutlined/>
         Find People
              </button>
      </div>
    </header>
   
<div className="w-full  my-2 px-3">
<input placeholder="search" className="w-full 
px-2 py-1.5 rounded-lg
text-[14px] border-neutral-200
dark:placeholder:text-neutral-100 text-neutral-300 bg-neutral-100"/>    
</div>
    <ul className="overflow-y-auto mt-2 h-screen">
      {
        chat?.result.map((con:any)=> <li key={con?.conversationId}>
      <button onClick={()=>handleSelectConversation(con?.conversationId)} 
       className={`inline-flex
       justify-between items-center py-1.5 px-2  w-full gap-2  ${con?.conversationId === name ?  
       "bg-zinc-50" : "bg-white" }  cursor-pointer
       dark:hover:bg-zinc-500 hover:bg-neutral-50`}>
        {
          con?.participantInstances.map((user:any)=>
          <>
         <div className="flex text-ellipsis  gap-2">
        <AvatarUser 
        src={user?.userInstance?.userInfoInstance?.profile_url} 
        size={40} />  
        <div className="overflow-hidden text-ellipsis truncate">  
        <h2 className="text-[16px] text-start 
        font-semibold">{user?.userInstance?.username}</h2> 
        <p className="text-gray-600 text-start
         dark:text-neutral-100 truncate w-[10rem] 2xl:w-[15rem] text-[14px]">{con?.lastmessage}</p>
        </div>
        </div>
        <p className="text-gray-600 text-start
         dark:text-neutral-100 
         mx-2
         text-[10px]">{moment(con?.lastMessageTime).fromNow()}</p>
          </>)
        }       
      </button>       
        </li>)
      }          
    </ul>
  </div>
}