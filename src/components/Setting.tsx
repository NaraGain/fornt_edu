import { Space,Dropdown, message,} from "antd";
import React, { createContext, useContext, useReducer, useState} from "react";
import type { MenuProps } from 'antd'
import { EllipsisOutlined, LoadingOutlined, LogoutOutlined,  
   MoonOutlined,  
   SettingOutlined,
   SkinOutlined,
   SunOutlined,
   UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../auth/ProtectedRoute";
import { ThemeSetting } from "./ThemSetting";
import { AvatarUser } from "./Avatar";

interface stateProps {
  isModalOpen : boolean,
}

type Action =
{type : 'SHOW_MODAL&&HIDEMODAL'; payload:boolean} 

const initialState:stateProps = {
  isModalOpen : false
}

export const OpenModalSettinProvider = createContext<{
  state : stateProps,
  dispatch : React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null,
});


const reducer = (state:stateProps, action:Action):stateProps => {
  switch (action.type) {
      case 'SHOW_MODAL&&HIDEMODAL':
        return { ...state, isModalOpen: action.payload };

      default:
        return state;
    }
}


const Setting:React.FC = () =>{
  const user:any = useContext(UserContext)
  const [loading ,setLoading] = useState(false)
  const [state , dispatch]  = useReducer(reducer, initialState)
  const [messageApi , contextHolder] = message.useMessage()
  const handleLogOut = () =>{
    messageApi.open({
      key : "logout",
      type: "loading",
      content: "log out user account ...",
      duration : 0,
    })
    setTimeout(()=> {
      localStorage.removeItem('TOKEN')
      localStorage.removeItem('userId')
      localStorage.removeItem('username')
      localStorage.removeItem('friend')
      window.location.href = "/login"
      messageApi.destroy('logout')
    }, 1000)
   
  }

  const handleShow = () => {
    dispatch({type:'SHOW_MODAL&&HIDEMODAL' , payload:true})
  }

  const items:MenuProps['items'] = [{
    label:<Link to={`/p/${user?.username}/feed`}> 
    <div className="flex gap-3 font-nokora">
          <div className="bg-[#7469B6] px-1 rounded-md">
            <UserOutlined style={{color:'white'}}/>
          </div>
        profile
      </div>
      </Link>
      ,
    key : 0,
  },
  {
    key:4,
    label : <Link to={`/u?name=${user?.username}`} className="flex font-nokora gap-3 ">
      <div className="flex gap-3 bg-green-400  rounded-md px-1">
           <SettingOutlined style={{color:'white'}}/>
      </div>
      <a>settings & privacy</a></Link>
  },
  {
    label:<a onClick={handleShow} 
    className="flex font-nokora gap-3">
        <div className="flex gap-3 bg-blue-500 text-white  
        rounded-md px-1">
          {state.isModalOpen ? <SunOutlined/> : <MoonOutlined/>}
          </div>    
      <p>{state.isModalOpen ? "Light" : "Dark"} Mode</p></a>,
    key : 11,
  },
  {
    label:<a onClick={handleLogOut} className="flex font-nokora gap-3">
        <div className="flex gap-3 bg-red-500  rounded-md px-1">
          {loading ? <LoadingOutlined/>
          :<LogoutOutlined style={{ color:'white'}}/> }
          </div>    
      <p> log out</p></a>,
    key : 10,
  },
  
  ]

 
    return <OpenModalSettinProvider.Provider value={{state,dispatch}}>
      {contextHolder}
 <div className="">
    <div className="flex justify-between items-center">
        <div className=" items-center">
         <Dropdown arrow trigger={['click']} menu={{items}}>
          <Space className="cursor-pointer">
          <AvatarUser size={30} src={user?.userInfoInstance?.profile_url}/>
          <label className="pl-1 text-[16px] tracking-wide mr-1">{user?.username}</label>
         </Space>
         </Dropdown>
        </div>
    </div>
</div>
<ThemeSetting/>
    </OpenModalSettinProvider.Provider>

}


export default Setting;


