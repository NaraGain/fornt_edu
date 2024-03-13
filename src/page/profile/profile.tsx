import React from "react";
import { Button, Image, Tabs, TabsProps} from "antd";
import { AppstoreOutlined, CameraOutlined, 
     EditOutlined, 
     MoreOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { HeaderProfile } from "./components/headerProfile";



const items:TabsProps['items'] = [
    {
        key : '1',
        label : <Link to={"/profile"}>
                <label
                 className="flex gap-3 dark:text-neutral-100 items-center">
                    <AppstoreOutlined/>
                    my feed</label></Link>,
        children : null
    },
    {
        key : '2',
        label : <Link to={"/profile/photo"}>
                <label className="flex gap-3 dark:text-neutral-100 items-center">
          <CameraOutlined/>
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
     text-neutral-600 max-w-4xl ">
        <span className="flex gap-5 ">
            <div className="basis-[30%] ">
            <Image
            className="rounded-full dark:bg-zinc-900 bg-white shadow-sm"
             width={180}
             src="https://techtodown.com/api/uploads/Dumb_Ways_to_Die_feature_image_webp_3755f99318.png"
             />
            <div className="flex items-center gap-2">
            <h1 className="text-[28px]">visal</h1>
            </div>
            <p className="text-sm
             dark:text-neutral-400 text-neutral-200">@visal_boy_loy</p>
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
                
             <p className="text-[12px] inline-block my-2 bg-neutral-100
              dark:bg-zinc-900 p-3 rounded-lg tracking-wide">
             🤣👍😁Tailwind includes an expertly-crafted default color
              palette out-of-the-box that is a great
             </p>

             <Button className="flex justify-center rounded-xl items-center">
                <EditOutlined/>
                Edite Profile
             </Button>
            </div>
        <div className="basis-[70%] w-full">
        <Tabs items={items}> </Tabs>
            <div className="">
            <HeaderProfile
           follower="13"
           following="14"
           achivment="14"
           />
           <div className="my-3">
           <Outlet/>
           </div>
            
        </div>
        </div>
          
            </span>
    </div>

}


export default Profile