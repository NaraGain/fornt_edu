import React from "react";
import {BookOutlined, CoffeeOutlined, FileOutlined,
      PlusOutlined, StarOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
import { Button } from "antd";
import { CreateFeed } from "./createFeed";

const itemsList = [{
    name : "favarite",
    icon : <StarOutlined style={{color:"white"}}/>,
    color : "bg-blue-500",
    },
    {
     name : 'library',
     icon : <BookOutlined style={{color:"white"}}/>,
     color : "bg-amber-400",
    },
    {
        name: 'class',
        icon : <CoffeeOutlined  style={{color:"white"}}/>,
        color : "bg-emerald-500",
    },
    {
        name : 'course',
        icon : <FileOutlined  style={{color:"white"}}/>,
        color : "bg-rose-500",
    },


]

const LeftBar:React.FC = () =>{
    return <div className="">
          <CreateFeed></CreateFeed>
    <ul className="text-[14px] my-2 max-w-36">
    <p className="px-3 my-2 bg-blue-100
     text-blue-500 inline-flex rounded-md">my time</p>
       {
        itemsList.map((item,key)=> {return (<li key={key}>
                    <Link to={"#"}>
                    <div className='inline-flex w-full px-2 rounded-md
                     hover:bg-neutral-100 dark:hover:bg-slate-800 py-2 gap-2'>
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
