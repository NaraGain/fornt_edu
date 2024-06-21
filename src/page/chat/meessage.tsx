import React, { useContext, useEffect,  useState } from "react"
import { AvatarUser } from "../../components/Avatar"
import { MoreOutlined, 
   FileImageOutlined,
    SmileOutlined,
     PaperClipOutlined, SendOutlined, 
     DeploymentUnitOutlined} from "@ant-design/icons"
import { baseReactQueryInstance } from "../../api"
import { UserContext } from "../../auth/ProtectedRoute"
import io from "socket.io-client"
import { Messages } from "./type/chat.type"
import { useLocation, useParams } from "react-router-dom"
import moment from "moment"


export const Message = () => {
    const [participant, setParticipant] = useState<any>()
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const authUser:any = useContext(UserContext)
    const socket = io('http://localhost:4000');
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const resource = searchParams.get('resource')
    const {name} = useParams()
    useEffect(()=>
        {
      if(name){
                const fetchMessage = async () =>{
                    const response = await baseReactQueryInstance.post('/message/find_message', {
                      conversationId : name
                    })
                    console.log(response.data?.result)
                    setParticipant(response.data?.result?.participantInstances)
                    setMessages(response?.data?.result?.messageInstances)
                }

                console.log(messages)

                fetchMessage()

                // return () => socket.disconnect('')
            }
            
        }, [searchParams])


        useEffect(()=>{

        },[])


       

        const handlSendMessage = () => {

                  socket.emit('sendMessage',
                     {userId : authUser.userid ,
                      groupId:"1" , 
                      content: newMessage,
                      userInstance : {
                        userid : authUser.userid,
                        username : authUser.username,
                        userInfoInstance : {
                           infoid : 1,
                           profile_url : authUser?.userInfoInstance?.profile_url
                        }
                      }
                      })         
                    setNewMessage('')
             
          }

    return <>
          { !name ? <React.Fragment>
            <div className="flex-1 flex items-center gap-3 justify-center flex-col w-full ">
              <h1 className="text-[40px] text-purple-950">
                <DeploymentUnitOutlined/>
              </h1>
              <p className="text-[14px] bg-neutral-100 px-2
               rounded-full text-neutral-500">
              Please Select conversation
              </p>
              </div>
            </React.Fragment> :  <>
                  <header className=" dark:bg-zinc-700  
                   border-neutral-100 dark:shadow-neutral-500/30 
                flex justify-between items-center gap-2 pt-3 pb-2 px-4 text-gray-700">
                    <div className="flex gap-2 items-center">
                    {
                    participant?.map((items:any, key:any)=><React.Fragment key={key}>
                    <AvatarUser size={36} 
                    src={items?.userInstance?.userInfoInstance?.profile_url}/>
                    <div>
                    <h1 className="text-[14px] dark:text-neutral-100 tracking-wide font-semibold">{
                      items?.userInstance?.username}</h1>
                    <p className="text-neutral-300 text-[10px]">last-seen</p>
                    </div>
                    </React.Fragment>)
                  }
                   
                    </div>
                    <div className="flex gap-3 dark:text-neutral-200 ">
                    <MoreOutlined className="text-[18px]"/>
                    </div>
                </header>
                <div className="h-screen 2xl:w-full md:max-w-5xl w-full mx-auto overflow-y-auto p-6 pb-10">   
                  {
                    messages?.length === 0 ? <div className="flex-1 h-full bg-neutral-100 
                    flex flex-col justify-center items-center">
                      <h1 className="text-[38px] text-center">
                        👍
                      </h1>
                      <div className="text-start">
                        <p>No message</p>
                        <p className="text-neutral-400 text-[14px]">Say Hi to {resource}</p>
                      </div>
                    
                  </div>

                  : 
                <ul>{
           messages?.map((message:any, key:any) => ( <li key={key}>
                <div className={ message?.senderId !== authUser?.userid ? "flex mb-4 gap-2 cursor-pointer" 
                  : "flex justify-end mb-4 cursor-pointer gap-2"}>
                   <AvatarUser src={authUser?.userid === message?.userId ? authUser?.userInfoInstance?.profile_url 
                    : message?.userInstance?.userInfoInstance?.profile_url}/>  
                    <div>            
                 <div className={`flex max-w-96  dark:bg-zinc-600 shadow-md shadow-gray-100/10
                  ${message?.senderId !== authUser?.userid ? "bg-white text-neutral-500" 
                  : "bg-[#50CB93] text-white" } rounded-[6px] py-2 gap-3`}>
                    <p className=" text-[14px] px-2">{message?.content}</p>
                 </div>
                 <p className="text-end text-[8px] text-slate-300 my-1">{moment(message?.created_at).fromNow()}</p>
                 </div>
                
               </div>
             
                </li>))
                  }
                    </ul>  
}
                </div>
                
                <footer className=" mx-4 w-auto border bg-white  mb-5 rounded-lg ">
                  <div className="w-auto mx-auto flex px-4 py-1.5  gap-2">
                    <input  className="rounded-lg
                    dark:text-neutral-50
                    focus:border-none
                    w-full
                    text-[14px]
                    hover:bg-none
                    bg-white
                    outline-none
                    outline-border-none
                    py-1.5
                    dark:bg-zinc-600
                     dark:placeholder:text-neutral-100" 
                     placeholder="Send Message" 
                     value={newMessage}
                     spellCheck
                     onChange={(e)=> setNewMessage(e.target.value)}/>
                     </div>
                      <div className="flex justify-between
                       text-neutral-500 dark:text-neutral-100 
                      rounded-b-lg py-[4px] px-4
                       bg-neutral-50 items-center">
                     <span className="flex gap-2 mt-1">
                     <button className="
                   rounded-full">
                    <PaperClipOutlined/>
                  </button>
                     <button className="
                  rounded-full">
                    <SmileOutlined/>
                  </button>
                  <button className="
                   rounded-full">
                    <FileImageOutlined/>
                  </button>
                     </span>
                     <button className={` ${newMessage ? "bg-[#7469B6]" 
                     : "text-slate-500 bg-neutral-200"} text-[14px] py-0.5 px-3 
                     rounded-md text-neutral-100`}>
                      <SendOutlined/>
                     </button>
                     </div>
            
                </footer>
  </>              
}
    </>
}