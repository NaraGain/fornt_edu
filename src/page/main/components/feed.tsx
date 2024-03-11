import { Avatar, ConfigProvider } from "antd";
import React from "react"
import { EllipsisOutlined,
     PushpinOutlined, 
     WarningOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import {Dropdown,Space} from 'antd'
import FeedContent from "./feedContent";
import ReactContent from "./reactContent";

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

const Feed:React.FC = ()=>{
    return <div className="bg-white dark:bg-zinc-900 max-w-3xl 
    mb-3
    dark:border dark:border-zinc-700 
    shadow-sm shadow-gray-100/100
     dark:shadow-slate-900/30
  text-neutral-600  relative
     justify-center rounded-[10px]
      p-5 boder border-e-neutral-100">
        <span className="flex items-center justify-between gap-2">
        <label className="inline-flex gap-2 items-center">
        <Avatar   src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <div className="">
        <p className="font-semibold
         text-neutral-500
          dark:text-neutral-200 
          text-[15px]">visal</p>
        <p className="text-neutral-300
         dark:text-neutral-100 text-[10px]">
           time
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
                <Space className="dark:text-neutral-400">
                <EllipsisOutlined/>
                </Space>
            </Dropdown>
            </ConfigProvider>
          
        </div>
        </span>
        
        <div className="px-5 py-3">
            <span>
                <p className="text-[14px] dark:text-neutral-300 text-neutral-500 break-words">
                Tailwind includes an expertly-crafted default color
                 palette out-of-the-box that is a great starting point if you don’t have
                  your own specific branding in mind. 
                </p>
            </span>
        <FeedContent/>
        <ReactContent/>
        </div>
       
    </div>
}

export default Feed;