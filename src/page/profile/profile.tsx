import React from "react";
import { Avatar, Button, Image, Tabs, TabsProps} from "antd";
import { AppstoreOutlined, BuildOutlined, CameraOutlined, 
     EditOutlined, 
     EnvironmentOutlined, 
     HeatMapOutlined, 
     HomeOutlined, 
     MailOutlined, 
     MoreOutlined, SmileOutlined, UsergroupAddOutlined } from "@ant-design/icons";
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
        <span className=" p-4  flex-1 flex-col gap-5 ">
            <div className="flex   w-full  px-3 md:px-0 my-3 md:my-0 ">
                <div className="flex">
                    <div className="]">
            <Avatar
            size={{xs:80,sm:90,md:100,lg:100,xl:140,  xxl: 150}}
            className="rounded-full cursor-pointer dark:bg-zinc-900 bg-white shadow-sm"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLz9Kn0X4Uq_lgXRu6geUjhiWjng7Xx6O63bgDMcJGQ&s"
             />
             </div>
             <div className="md:items-stretch mx-2 md:mx-[2rem]">
                <div>
            <h1 className="md:text-[28px]">ចន្ទ័នីតាបញ្ញា</h1>
            <p className="text-sm
             dark:text-neutral-400 text-neutral-400">@ចន្ទ័នីតាបញ្ញា</p>
            </div>
            <HeaderProfile
           follower="13"
           following="14"
           achivment="14"
           users={false}
           />
            </div>
            </div>
            </div>

            <div className="flex md:my-5  md:flex-row flex-col">
                {/* user descritpion form */}

                <div className="basis-[30%]  py-0 px-3 ">
                <div className="flex  text-[14px] md:text-[14px] 2xl:text-[16px] flex-col gap-2">
                    <div className="">
            <p className="text-[14px] my-2 
                p-3 rounded-lg  break-words tracking-wide">
             🤣👍😁Be Yourself
             </p>
             </div>
                <span className="flex gap-3 items-center">
                  <EnvironmentOutlined className="text-blue-700"/>
                  <p >St21A, Phomn Penh</p>
                </span>
                <span className="flex gap-3 items-center">
                  <BuildOutlined className="text-blue-700"/>
                  <p>Artist and Student</p>
                </span>
                <span className="flex gap-3 items-center">
                  <MailOutlined className="text-blue-700"/>
                  <p>chatpanha@gmail.com</p>
                </span>
                </div>
            <div className="md:flex mx-4 my-3  flex-wrap gap-2">
             <div className="m-1 bg-neutral-50  inline-flex rounded-md px-1
            dark:bg-zinc-600">
                   <p className="text-[14px]">😁Food</p>
                </div>
                <div className="m-1 inline-flex rounded-md px-1
            dark:bg-zinc-600">
                   <p className="text-[14px]">🎾Sport</p>
                </div>
                <div className="m-1 inline-flex rounded-md px-1
            dark:bg-zinc-600">
                   <p className="text-[14px]">🎏moutain</p>
                </div>
                <div className="m-1 inline-flex border-dashed
                 rounded-md px-1">
                   <button className="text-[14px] dark:bg-zinc-700 
                    bg-neutral-100 rounded-md px-2"> + add</button>
                   </div>
                </div>
            </div>
            {/* end uer description */}
                {/* user feed */}
             <div className="px-3 md:px-0 basis-[70%]">
            <div className="">
            <Tabs 
        className="font-nokora flex justify-center"
        items={items}> </Tabs>
           <div className="my-3">
           <Outlet/>
           </div>
            
        </div>
        </div>

            </div>       
            </span>
    </div>

}


export default Profile