import { useContext, useEffect, useState } from "react"
import { baseReactQueryInstance } from "../../api"
import { LeftCircleOutlined,SearchOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { AvatarUser } from "../../components/Avatar"
import { UserContext } from "../../auth/ProtectedRoute"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { ChatContext } from "./chat"


export const Conversation = () => {
    const [conversation ,setConversation] = useState<any[]>([])
    const authUser:any = useContext(UserContext)
    const {state , dispatch} = useContext(ChatContext)
    const navigate = useNavigate()

    
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
        navigate(`/chat/g/${gId}`)
    }

    useEffect(()=>{
        getConversation()
    },[])  

    return <>
  
    <div className="w-[23%] p-2 bg-white shadow-l-sm shadow-gray-400/65 dark:bg-zinc-800
             dark:border-zinc-700 ">
              
           </div>

    </>
}