import { Avatar, ConfigProvider } from "antd";
import React from "react"
import { EllipsisOutlined,
     PushpinOutlined, 
     WarningOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import {Dropdown,Space} from 'antd'
import FeedContent from "./feedContent";
import ReactContent from "./reactContent";


interface feed {
    path? :string
}

const items:MenuProps['items'] = [{
    label : <a className="inline-flex gap-2">
        <div className="bg-blue-500 
        rounded-md px-1 text-white">
            <PushpinOutlined/>
        </div>
      
        save this feed</a>,
    key : 0
},
{
    label: <a className="inline-flex gap-2">
        <div className="bg-rose-500
         text-white rounded-md px-1">
        <WarningOutlined/>
        </div>
        report feed</a>,
         key : 1
}

]

const Feed:React.FC<feed> = ({path}:feed)=>{
    return <div className="bg-white py-3 dark:bg-zinc-900 max-w-[34rem] 
    mb-3 
    dark:border-zinc-700 
     shadow-gray-100/100
     dark:shadow-slate-900/30
  text-neutral-600  relative
     justify-center rounded-[10px] px-6">
        <span className="flex items-center justify-between gap-2">
        <label className="inline-flex gap-2 items-center">
        <Avatar   
        size={"large"}
        className="border border-neutral-100"
        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <div className="">
        <p className="
         text-neutral-800
          dark:text-neutral-200 
          text-[18px]">visal</p>
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
            className="cursor-pointer"
             menu={{items}} trigger={['click']}>
                <Space className="dark:text-neutral-400 text-[18px]">
                <EllipsisOutlined/>
                </Space>
            </Dropdown>
            </ConfigProvider>
          
        </div>
        </span>
        
        <div className=" py-3">
            <span>
                <p className="text-[14px] my-2 dark:text-neutral-300 text-neutral-600 break-words">
                Tailwind includes an expertly-crafted default color
                 palette out-of-the-box that is a great starting point if you don’t have
                  your own specific branding in mind. 
                </p>
            </span>
        <FeedContent
        path={path}
        />
        <ReactContent/>
        <hr/>
        </div>
       
    </div>
}

export default Feed;