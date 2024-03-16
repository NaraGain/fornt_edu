import React from "react";
import {BookOutlined, BuildOutlined, CompassOutlined, 
      HomeOutlined,
      ReadOutlined,StarOutlined} from '@ant-design/icons'
import { Link, useLocation, useParams } from "react-router-dom";
import { CreateFeed } from "./createFeed";
import { FloatButton } from "antd";

const itemsList = [
    {
    id : 1,
    name : "home",
    icon : <HomeOutlined style={{color:"white"}}/>,
    color : "bg-blue-500",
    link : "/home",
     },
     {
     id: 2,
    name : 'explore',
    icon : <CompassOutlined style={{color:'white'}}/>,
    color : "bg-purple-500",
    link : "/explore",
    
    },
    {
    id:3,
    name : "favorite",
    icon : <StarOutlined style={{color:"white"}}/>,
    color : "bg-green-500",
    link: "/favorite",
    },
    {
        id:4,
     name : 'library',
     icon : <BookOutlined style={{color:"white"}}/>,
     color : "bg-amber-400",
     link : '/library',
    },
    {
        id:5,
        name: 'class',
        icon : <BuildOutlined  style={{color:"white"}}/>,
        color : "bg-emerald-500",
        link : "/class",
    },
    {
        id:6,
        name : 'course',
        icon : <ReadOutlined  style={{color:"white"}}/>,
        color : "bg-rose-500",
        link : "/course",
    },


]

const LeftBar:React.FC = () =>{

    const {pathname} = useLocation()
    return <div className="flex md:block ">
     <CreateFeed></CreateFeed>
    <ul className="text-[16px] md:px-0 px-2 md:block md:overflow-auto overflow-x-auto w-full  flex md:my-2 md:max-w-36">
    <h1 className="px-3 my-2 dark:bg-slate-800 bg-blue-100
     text-blue-500 hidden md:inline-flex rounded-md">timeline</h1>
       {
        itemsList.map((item,key)=> {return (<li  key={key}>
                    <Link  to={`${item.link}`}>
                    <div className={`${item.link == pathname ? "bg-blue-50 dark:bg-slate-800 dark:text-neutral-100" 
                    : ""} inline-flex w-full px-2 rounded-md
                     hover:bg-neutral-100 dark:hover:bg-slate-800 my-1 py-2 gap-2`}>
                    <div className={`${item.color} p-1 flex items-center rounded-md`}>
                     {item.icon}
                     </div>
                     <p className="text-neutral-600 dark:text-neutral-200 bg-blue 
                     truncate tracking-wide">{item.name}</p>
                    </div>
                    </Link>
            
        </li>)})
       }
    </ul>
    </div>
}


export default LeftBar
