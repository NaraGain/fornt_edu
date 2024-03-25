import { Avatar, ConfigProvider } from "antd";
import React from "react"
import { EllipsisOutlined,
     PushpinOutlined, 
     UserOutlined, 
     WarningOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import {Dropdown,Space} from 'antd'
import FeedContent from "./feedContent";
import ReactContent from "./reactContent";


interface feed {
    path? : string | string[] | undefined,
    profile?:string,
    username?:string,
    describe? :string,

}

const items:MenuProps['items'] = [{
    label : <a className="inline-flex gap-2 font-nokora">
        <div className="bg-blue-500 
        rounded-md px-1 text-white">
            <PushpinOutlined/>
        </div>
      
        save this feed</a>,
    key : 0
},
{
    label: <a className="inline-flex gap-2 font-nokora">
        <div className="bg-rose-500
         text-white rounded-md px-1">
        <WarningOutlined/>
        </div>
        report feed</a>,
         key : 1
}

]

const Feed:React.FC<feed> = ({path, username, profile,describe}:feed)=>{
    return <div className="bg-white w-full py-3 max-w-[34rem] 
    mb-3 
    -z-0
    dark:bg-zinc-700/30
    dark:border-zinc-700 
     shadow-gray-100/100
     dark:shadow-slate-900/30
  text-neutral-600  relative
        border-b dark:rou
     justify-center rounded-md px-6">
        <span className="flex items-center justify-between gap-2">
        <label className="inline-flex gap-2 items-center">
        <Avatar   
          size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 45,  xxl: 45 }}
        className="border border-neutral-100"
        src={profile ? profile : ""} icon={profile ? "" : <UserOutlined/>}  />
        <div className="">
        <p className="
         text-neutral-800
          dark:text-neutral-200 
          text-[18px]">{username}</p>
        <p className="text-neutral-300
         dark:text-neutral-100 text-[10px]">
           1 day
        </p>
        </div>
       
        </label>
        <div>
            <ConfigProvider>
            <Dropdown
            placement="bottomRight"
            arrow
            className="cursor-pointer "
             menu={{items}} trigger={['click']}>
                <Space className="dark:text-neutral-400  text-[18px]">
                <EllipsisOutlined/>
                </Space>
            </Dropdown>
            </ConfigProvider>
          
        </div>
        </span>
        
        <div className=" py-3">
            <span>
                <p className="text-[14px] 
                my-2 dark:text-neutral-300
                 text-neutral-800 break-words">
                {describe}
                </p>
                <FeedContent path={path}/>
        <ReactContent/>
            </span>
          
       
        </div>
       
    </div>
}

export default Feed;