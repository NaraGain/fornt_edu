import React from "react";
import { Image, Tabs, TabsProps, Tag} from "antd";
import { CoffeeOutlined, FileImageOutlined,
     MoreOutlined, TrophyOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Navigate, Outlet } from "react-router-dom";
import NavigatorButton from "../../components/navigateButton";



const items:TabsProps['items'] = [
    {
        key : '1',
        label : <Link to={"/profile"}>
                <label
                 className="flex gap-3 dark:text-neutral-100 items-center">
             <CoffeeOutlined/>
                    my feed</label></Link>,
        children : null
    },
    {
        key : '2',
        label : <Link to={"/profile/photo"}>
                <label className="flex gap-3 dark:text-neutral-100 items-center">
            <FileImageOutlined/>
            photo</label></Link>,
        children : <></>
    },
    {
        key : '3',
        label :<Link to={"/profile/follower"}><label className="flex gap-3
             dark:text-neutral-100 items-center">
            <UsergroupAddOutlined />
            follower</label> </Link>,
        children : null
    },
    {
        key : '4',
        label : <Link to={"/profile/more"}>
            <label className="flex gap-3 dark:text-neutral-100 items-center">
          <MoreOutlined/>
            more</label></Link>,
        children : null
    }

]


const Profile:React.FC = () =>{

    return <div className="relative 
    mx-auto  
    rounded-xl dark:text-neutral-100
     text-neutral-600 max-w-4xl top-[3.5rem]">
       <NavigatorButton/>
        <span className="flex gap-5 ">
            <div className="basis-1 ">
            <Image
            className="rounded-xl dark:bg-zinc-900 bg-white shadow-sm"
             width={180}
             src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" 
            />
            <h1 className="text-[28px]">visal</h1>
            <h4 className="text-sm
             dark:text-neutral-400">@visal boy loy</h4>
             <div className="flex flex-wrap gap-2">
             <div className="my-2 inline-flex rounded-md px-1
              bg-neutral-100 border dark:bg-zinc-600">
                   <p className="text-[14px]">😁Food</p>
                </div>
                <div className="my-2 inline-flex border-dashed
                 rounded-md px-1 bg-neutral-100 border dark:bg-zinc-600">
                   <p className="text-[14px]"> + add</p>
                </div>
             </div>
                
             <p className="text-[12px] my-2 bg-neutral-100
              dark:bg-zinc-900 p-3 rounded-xl tracking-wide">
             🤣👍😁Tailwind includes an expertly-crafted default color
              palette out-of-the-box that is a great
             </p>
            </div>

            <div className="w-full basis-1/1  ">
            <div className="dark:bg-zinc-900 flex 
             items-center w-full 
             static h-[11rem]
             rounded-xl bg-white shadow-sm ">
            <div className="grid grid-cols-3 w-full text-center text-[20px]">
                <div className="basis-1/3
                    space-y-2
                 text-[16px] flex flex-col items-center ">
                    <div className="">
                    <UsergroupAddOutlined
                     className="mx-2 text-[4rem] text-zinc-600"/>
                    </div>
                   <h1>follower 15</h1></div>
           <div className="basis-1/3 text-[16px] space-y-2 text-center">
           <UserOutlined
           className="mx-2 text-zinc-600 text-[4rem]"/>
           <h1>following 10</h1>
           </div>
           <div className="basis-1/3 text-[16px] space-y-2">
            <TrophyOutlined
            className="text-[4rem] text-zinc-600"
            />
            <h1>
            Achivment 31</h1>
            </div>
         
            </div>
            </div>
        <Tabs items={items}> </Tabs>



<div>
    <Outlet/>
</div>
     
            </div>
            </span>
    </div>

}


export default Profile