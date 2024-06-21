import { AliwangwangOutlined, AppstoreOutlined, BellOutlined, MessageOutlined, 
    SettingOutlined, TeamOutlined, 
    UserAddOutlined } from "@ant-design/icons"
import { AvatarUser } from "../../components/Avatar";
import { useContext, useState } from "react";
import { UserContext } from "../../auth/ProtectedRoute";
import { Link, useLocation, useParams } from "react-router-dom";


export const LeftBar = () =>{

    const authUser:any = useContext(UserContext)
    const {name} = useParams()
    const location = useLocation()
    const checkname = name == 'undefined' ? '#' :
       `/${name}`

    
       console.log(location.pathname)
   
    return <div className="w-[4.5%] bg-[#393646] h-screen overflow-hidden ">
    <div className="flex-1 flex flex-col justify-between h-full items-center">
    <div className="flex flex-col text-neutral-100 text-center py-3 items-center gap-3">
        <AliwangwangOutlined className="text-[26px] mb-3"/>
    {/* <img 
    className="w-8 h-8 rounded-full filter grayscale contrast-200 brightness-0 dark:brightness-75"
    src='./public/logo.png'/> */}

    <Link to={`/chat/p${checkname}`} className={`text-[18px] ${location.pathname == `/chat/p${checkname}` 
      ? "bg-[#4F4557] px-5 w-full " : " " }`}>
      <MessageOutlined/>
    <p className="text-[12px] truncate">Chat </p>
    </Link>

    <Link to={`/home`} className={`text-[18px]`}>
      <AppstoreOutlined/>
    <p className="text-[12px] truncate">Feed</p>
    </Link>

    <Link to={`/chat/g${checkname}`} className={`text-[18px] ${location.pathname == `/chat/g${checkname}` 
      ? "bg-[#4F4557] px-5 w-full " : " " }  `}>
    <TeamOutlined/>
    <p className="text-[12px] truncate">Group</p>
    </Link>

    <Link to={`/chat/c${checkname}`} className={`text-[18px] ${location.pathname == `/chat/c${checkname}` 
      ? "bg-[#4F4557] px-5 w-full " : " " }  `}>
    <UserAddOutlined/>
    <p className="text-[12px] truncate">Contact</p>
    </Link>
    <Link to={`/chat/a${checkname}`} className={`text-[18px] ${location.pathname == `/chat/a${checkname}` 
      ? "bg-[#4F4557] px-5 w-full " : " " } `}>
    <BellOutlined/>
    <p className="text-[12px] truncate">Active</p>
    </Link>
    <Link to={"#"} className={`text-[18px] ${location.pathname == `/chat/s${checkname}` 
      ? "bg-[#4F4557] px-5 w-full " : " " }  `}>
    <SettingOutlined/>
    <p className="text-[12px] truncate">Setting</p>
    </Link>
    
    </div>

   <button className="my-2">
    <AvatarUser src={authUser?.userInfoInstance?.profile_url}/>
   </button>
   </div>
  </div>
}