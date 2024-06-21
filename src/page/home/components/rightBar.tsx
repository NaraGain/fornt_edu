import React from "react";
import { BellOutlined, CommentOutlined, InfoCircleOutlined, TagOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const itemsList =
 [
        {
                name : 'Profile',
                icon : <UserOutlined  />,
                color : "bg-blue-500",
            },
            {
                id : 1,
                name : "chat",
                icon : <CommentOutlined/>,
                color : "bg-blue-500",
                link : "/chat/p",
                 },
            {
                name : 'Notification',
                icon : <BellOutlined/>,
                color : "bg-[#AD88C6]",
            },
        {
        name : 'About',
        icon : <InfoCircleOutlined  />,
        color : "bg-purple-500",
        disable : true,
        },
    {
        name : 'v.0.1.dev',
        icon : <TagOutlined />,
        color : "bg-[#AD88C6]",
        disable : true,
    }
]



const RigthBar:React.FC = () => {
      

        return <div className="text-[16px] md:block hidden">
            <p className=" mt-4 px-2
            text-slate-400 dark:text-neutral-200  inline-flex rounded-md">About</p>
                <ul className="max-w-36">
                {
                itemsList.map((item,key)=> {return (<li key={key}>
                    <Link to={`/${item.name.toLowerCase() 
                        === `profile` ?
                         `p/${localStorage.getItem('username')}/feed` : item.name}`}>
                    <button disabled={item.disable} className='inline-flex w-full px-2 
                    rounded-md  hover:bg-blue-50 dark:hover:bg-slate-800 my-1 py-2 gap-2'>
                    <div className={`bg-neutral-100 border-neutral-100
                     dark:bg-slate-700 dark:border-neutral-700 
                     border text-neutral-500
                      dark:text-neutral-300 text-[18px] p-1 flex 
                    items-center rounded-[7px]`}>
                     {item.icon}
                     </div>
                     <p className="text-neutral-800 
                    truncate dark:text-neutral-200 tracking-wide">{item.name}</p>
                    </button>
                    </Link>
            
        </li>)})
       }
                </ul>
        </div>
}


export default RigthBar;