import React from "react";
import { Button, Image, Tabs, TabsProps} from "antd";
import { AppstoreOutlined, CameraOutlined, 
     EditOutlined, 
     MoreOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import HeaderProfile from "./components/headerProfile";



const items:TabsProps['items'] = [
    {
        key : '1',
        label : <Link to={"/profile"}>
                <label
                 className="flex gap-3 dark:text-neutral-100 items-center">
                    <AppstoreOutlined/>
                    post</label></Link>,
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
        <span className="md:flex md:flex-row p-4  flex-1 flex-col gap-5 ">
            <div className="md:basis-[30%]  px-3 md:px-0 my-3 md:my-0 ">
                <div className="block">
            <Image
            className="rounded-full dark:bg-zinc-900 bg-white shadow-sm"
             width={window.innerWidth > 768 ? 180 : 80}
             src="https://techtodown.com/api/uploads/Dumb_Ways_to_Die_feature_image_webp_3755f99318.png"
             />
            <div className="flex flex-col  md:items-stretch">
            <h1 className="text-[28px]">visal</h1>
            <p className="text-sm
             dark:text-neutral-400 text-neutral-400">@visal_boy_loy</p>
            </div>
            <p className="text-[12px] inline-block my-2 
                p-3 rounded-lg tracking-wide">
             🤣👍😁Tailwind includes 
             </p>
             <div className="md:flex  flex-wrap gap-2">
             <div className="m-1 inline-flex rounded-md px-1
              bg-neutral-100 border dark:bg-zinc-600">
                   <p className="text-[14px]">😁Food</p>
                </div>
                <div className="m-1 inline-flex border-dashed
                 rounded-md px-1 bg-neutral-100 border dark:bg-zinc-600">
                   <p className="text-[14px]"> + add</p>
                   </div>
                </div>

             </div>
             <Button className="flex justify-center rounded-xl items-center">
                <EditOutlined/>
                Edite Profile
             </Button>
            </div>
        <div className="md:basis-[70%] px-3 md:px-0 w-full">
            <div className="">
            <HeaderProfile
           follower="13"
           following="14"
           achivment="14"
           />
            <Tabs 
        className="font-nokora"
        items={items}> </Tabs>
           <div className="my-3">
           <Outlet/>
           </div>
            
        </div>
        </div>
          
            </span>
    </div>

}


export default Profile