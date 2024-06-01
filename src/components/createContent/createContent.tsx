import { Switch, Tabs, message } from "antd"
import { CameraOutlined, SmileOutlined,RocketOutlined } from "@ant-design/icons"
import React, { Dispatch, createContext, useReducer, useState } from "react"
import type { TabsProps } from 'antd';
import ImageUpload from "./ImageUpload";
import { StatusUpload } from "./statusUpload";
import { Modals } from "../Modals";




interface feedProps {
    icons? : JSX.Element
    title? : string,
}

interface newState {
  isModalOpen : boolean,
  loading : boolean,
}

const initialState:newState = {
  isModalOpen : false,
  loading : false
}

type Action = {type : 'SHOW_MODAL&&HIDEMODAL'; payload:boolean} |
              {type :  "Loading" ; payload:boolean} 

export const OpenModalContext = createContext<{
  state : newState,
  dispatch : Dispatch<Action>
}>({
  state: initialState,
  dispatch : () => null
});

const reducer = (state:newState, action:Action):newState => {
  switch (action.type) {
      case 'SHOW_MODAL&&HIDEMODAL':
        return { ...state, isModalOpen: action.payload };
      case 'Loading':
        return {...state , isModalOpen: action.payload}
      default:
       return state;
  }
  }


export const CreateContent:React.FC<feedProps> = ({ icons ,title}:feedProps) => {

const [state, dispatch] = useReducer(reducer , initialState)



 const showModal =()=>{
   dispatch({type : "SHOW_MODAL&&HIDEMODAL", payload : true})
}



const handleCancel = ()=>{
  dispatch({type : "SHOW_MODAL&&HIDEMODAL", payload : false})
}


const items:TabsProps['items'] = [
    {
        key: '1',
        label: <label
         className="inline-flex
          dark:text-neutral-100 gap-1">
            <SmileOutlined/>
            <p>Status</p>
            </label>,
        children: <StatusUpload/> 
        ,
      },
      {
        key: '2',
        label: <label className="inline-flex
         dark:text-neutral-100 gap-1">
        <CameraOutlined/>
        <p>Photo</p>
        </label>,
        children:<ImageUpload/>,
      },
]

    return <OpenModalContext.Provider  
    value={{state, dispatch}}>
   <div className="md:inline-block" >
      <button
        onClick={()=> showModal()}
            className=" border-none
                rounded-md 
                active:text-[#7469B6]
                inline-flex items-center gap-2
              shadow-none text-center 
             dark:text-neutral-300 text-[16px]">
                {icons}
                {title ?
               <p className=" text-neutral-800
                dark:text-neutral-100">{title}</p> : null
                    }
                </button> 
    </div>
    <Modals
    isModalOpen={state.isModalOpen}
    icon={<RocketOutlined className="text-white"/>}
    title={"Create Post"}
    handleCancel={handleCancel}
    footerBtn={false}>
    <span className="my-3">
    <Tabs
    defaultActiveKey="1" items={items}/>
    </span>           
    </Modals>
    </OpenModalContext.Provider>
}