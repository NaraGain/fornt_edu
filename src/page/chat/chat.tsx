import { ArrowLeftOutlined, FileOutlined, GroupOutlined, MenuFoldOutlined, MessageOutlined, PlusCircleOutlined, QuestionCircleOutlined, SendOutlined, SettingOutlined } from "@ant-design/icons"
import { SearchBtn } from "../../components/searchBtn"
import { AvatarUser } from "../../components/Avatar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../auth/ProtectedRoute"
import { Button, Form, Input } from "antd"
import io from "socket.io-client"
import axios from "axios"
import { baseReactQueryInstance } from "../../api"
const socket = io('http://localhost:4000');

interface User {
    id : string,
    username : string
}

interface Message {
    id: string,
    userId : string,
    groupId : string,
    content : string,
    User: User
}

interface Group {
    id : string,
    name : string,
}

interface ChatProps {
    user:User    
}




export const Chat = () => {
    const authUser:any = useContext(UserContext)
    const {TextArea} = Input
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [groups, setGroups] = useState<Group[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<number | null>(1);


    useEffect(()=> {
        if(selectedGroup){
            // const fectchMessage = async () => {
            //     const response = await baseReactQueryInstance.get(`message/${selectedGroup}`)
            //     setMessages(response.data)
            // }

            // fectchMessage()
            socket.emit("joinGroup", selectedGroup)
            socket.on('receiveMessage', (messages:Message)=>{
              // setMessages((prevMessage)=> [...prevMessage , messages])
              console.log(messages)
          })
            return () => {
                socket.off('receiveMessage')
            };
        };

       
       
    },[])

    const handleSendMessage = () => {
       
            socket.emit('sendMessage', {userId : authUser.userid ,
                 groupId:"1" , content: newMessage})
       
    }


    return <div className="flex h-screen overflow-hidden">
            <div className="w-1/4 bg-white border-r border-gray-50">
            <div className="flex bg-neutral-50/55 flex-col justify-between h-screen md:flex-1 ">
              <header className="p-2 py-2  border-gray-300 flex justify-between items-center ">
              <img className="w-8 h-8 rounded-full 
                filter grayscale contrast-200 brightness-0
                dark:brightness-75" 
                src="./logoNav.png"/>
                <div className="relative flex gap-2">
                    <button className="bg-blue-500 px-4  py-1 text-white rounded-full">
                    <PlusCircleOutlined/>
                        </button>
                
                <SearchBtn/>
                  <button id="menuButton" className="focus:outline-none">
                    <MenuFoldOutlined/>
                  </button>
                </div>
              </header>
               
              <div className="overflow-y-auto h-screen">
                <div className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-neutral-50 p-2">
                  <AvatarUser size={40} />
                  <div className="inline-block">
                    <h2 className="text-[16px] font-semibold">Alice</h2>
                    <p className="text-gray-600 text-[12px]">Hoorayy!!</p>
                  </div>
                </div>           
              </div>


              <div className="p-2 ">
                <div className="flex gap-3 items-center">
                <AvatarUser src={authUser?.userInfoInstance?.profile_url}/> 
               <p>
                account
               </p>
                </div>
            </div>

            </div>
           </div>
            <div className="md:flex md:justify-between md:flex-col h-screen md:flex-1">
                <header className="bg-white  flex justify-between items-center gap-2 py-2 px-4 text-gray-700">
                    <div className="flex gap-2 items-center">
                    <AvatarUser/>
                    <div>
                    <h1 className="text-[14px] tracking-wide font-semibold">Alice</h1>
                    <p className="text-neutral-300 text-[10px]">last-seen</p>
                    </div>
                    </div>
                    <div className="flex gap-3">
                    <QuestionCircleOutlined/>
                    <SettingOutlined/>
                    </div>
                 
                </header>
                
             
                <div className="h-screen overflow-y-auto p-4 pb-10">   
                <ul>
                    <li>
                        {/* //recicver */}
                    <div className="flex mb-4 cursor-pointer">
                     <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                       <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full"/>
                     </div>
                     <div className="flex max-w-96 bg-neutral-50/55 rounded-full py-2 gap-3">
                       <p className="text-gray-700 text-[14px] px-2">Thanks, you're the best!</p>
                     </div>
                   </div>
                    </li>
                    {/* sender   */}
                    <li>
                    <div className="flex justify-end mb-4 cursor-pointer">
                     <div className="flex max-w-96 bg-indigo-500 text-white rounded-full py-2 gap-3">
                       <p className="text-[14px] px-2">Anytime! Let me know how you like it. 😊</p>
                     </div>
                     <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                       <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar"
                        className="w-8 h-8 rounded-full"/>
                     </div>
                   </div>
                    </li>

                    </ul>  
                           
                </div>
                
              
                <footer className=" w-full py-2 px-4 flex gap-3  ">
                    <Input className="rounded-full" onChange={(e)=> setNewMessage(e.target.value)}/>
                    <Button className="rounded-full bg-blue-500 text-white" onClick={handleSendMessage}>Send</Button>
                </footer>
            </div>
        </div>
       
}