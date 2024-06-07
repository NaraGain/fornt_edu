import React from "react";
import {BookOutlined, CompassOutlined, 
      HomeOutlined,MenuFoldOutlined,NotificationOutlined,
    SearchOutlined,
    StarOutlined,
      TeamOutlined,
      UploadOutlined,} from '@ant-design/icons'
import { Link, useLocation } from "react-router-dom";
import { CreateContent } from "../../../components/createContent/createContent";
import Setting from "../../../components/Setting"
import { SearchBtn } from "../../../components/searchBtn";


const itemsList = [
    {
    id : 1,
    name : "Home",
    icon : <HomeOutlined/>,
    color : "bg-blue-500",
    link : "/home",
     },
     {
     id: 2,
    name : 'Explore',
    icon : <CompassOutlined/>,
    color : "bg-purple-500",
    link : "/explore",
    
    },
    {
        id:6,
        name : 'Community',
        icon : <NotificationOutlined/>,
        color : "bg-rose-500",
        link : "/course",
    },
    {
    id:3,
    name : "Favorite",
    icon : <StarOutlined className=""/>,
    color : "bg-green-500",
    link: "/favorite",
    },
    {
        id:4,
     name : 'Library',
     icon : <BookOutlined/>,
     color : "bg-amber-400",
     link : '/library',
    },
    {
        id:5,
        name: 'Group',
        icon : <TeamOutlined/>,
        color : "bg-emerald-500",
        link : "/class",
    },
    
]

const LeftBar:React.FC = () =>{
    const {pathname} = useLocation()
    return <div className="md:flex md:justify-between md:flex-col h-screen md:flex-1 ">
        <div className="px-2 flex items-center justify-between border-b md:border-none
         mb-3 md:mb-0 py-2 ">
        <div className="text-white font-semibold">
          <img className="w-8 h-8 rounded-full 
          filter grayscale contrast-200 brightness-0
          dark:brightness-75
          " src="./logoNav.png"/>
        </div>
        <div className="flex gap-3 items-center ">
          <SearchBtn/>
        <button onClick={()=>alert(1)} className="text-[20px]
        dark:text-neutral-300
         active:text-neutral-500 text-neutral-600">
            <MenuFoldOutlined/>
        </button>
        </div>
      
        </div>
    <div className="overflow-y-auto hidden lg:block h-full py-3  px-2">
        <div className="px-2 hidden md:block">
        <h1 className=" pb-3 text-neutral-400  tracking-wide
         dark:text-neutral-300">Activity</h1>
        <CreateContent
    icons={<div className="p-1.5 flex  dark:bg-slate-700
     dark:border-neutral-700 bg-neutral-100 text-neutral-600 items-center
       md:text-[16px] dark:text-neutral-300
        rounded-full md:rounded-[7px]">
        <UploadOutlined/>
   </div>}
   title="Create Post"
    ></CreateContent>
    </div>
    <ul className="text-[16px] md:px-0 px-2
     md:block md:overflow-y-auto md:gap-0  
     justify-between md:justify-normal  
     w-full  flex md:my-2 md:max-w-full">
    <h1 className="my-2
     hidden px-2 
     md:inline-flex  text-neutral-400 ">Shortcut</h1>
       {
        itemsList.map((item,key)=> {return (<li  key={key}>
                    <Link  to={`${item.link}`}>
                    <div className={`${item.link == pathname ? 
                    " font-semibold text-slate-500  dark:text-neutral-100" 
                    : ""} inline-flex w-full px-2 rounded-md items-center
                       dark:hover:bg-slate-700 my-1 py-2 gap-2`}>
                    <div className={`${item.link === pathname
                         ? "dark:font-semibold" : "text-slate-500"} 
                         border border-neutral-100 
                         md:text-[18px] 
                         p-1 flex items-center
                         dark:bg-slate-700 dark:border-neutral-700
                         bg-neutral-100 text-neutral-500 text-[20px]
                           rounded-[7px]
                          dark:text-neutral-300 `}>
                     {item.icon}
                     </div>
                     <p className="hidden md:block dark:text-neutral-200
                      text-slate-600 bg-blue 
                     truncate tracking-wide">{item.name}</p>
                    </div>
                    </Link>
            
        </li>)})
       }
    </ul>
</div>
    <div className="px-2 py-1  hidden md:block">
    <h1 className=" px-2 py-1 text-neutral-500  tracking-wide
         dark:text-neutral-300">More</h1>
         <div className="px-2 py-1.5
          dark:text-neutral-300 dark:border-none 
          flex gap-2 items-center text-neutral-700">
        <Setting/>
         </div>
    </div>
    </div>
}


export default LeftBar
