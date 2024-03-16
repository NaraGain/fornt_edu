import React from "react";
import { BorderlessTableOutlined, InfoCircleFilled, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const itemsList =
 [
        {
                name : 'profile',
                icon : <UserOutlined  style={{color:"white"}}/>,
                color : "bg-cyan-500",
            },
    {
        name : 'about',
        icon : <InfoCircleFilled  style={{color:"white"}}/>,
        color : "bg-orange-300",
    },
    {
        name : 'v.0.1.dev',
        icon : <BorderlessTableOutlined  style={{color:"white"}}/>,
        color : "bg-amber-300",
        disable : true,
    }
]



const RigthBar:React.FC = () => {
        return <div className="text-[16px] md:block hidden">
                <ul className="max-w-36">
                <p className="px-3 my-2 dark:bg-slate-800 bg-blue-100
     text-blue-500 inline-flex rounded-md">about</p>
                {
        itemsList.map((item,key)=> {return (<li key={key}>
                    <Link to={`/${item.name}`}>
                    <button disabled={item.disable} className='inline-flex w-full px-2 
                    rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 my-1 py-2 gap-2'>
                    <div className={`${item.color} p-1 flex 
                    items-center rounded-md`}>
                     {item.icon}
                     </div>
                     <p className="text-neutral-600 
                    truncate dark:text-neutral-200 tracking-wide">{item.name}</p>
                    </button>
                    </Link>
            
        </li>)})
       }
                </ul>
        </div>
}


export default RigthBar;