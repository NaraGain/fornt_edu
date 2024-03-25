import React from "react";
import { UsergroupAddOutlined, UserOutlined, TrophyOutlined, LinkOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface headerprofile {
    follower? : string,
    following? : string,
    achivment? : string,
    users?: boolean | undefined

}


const HeaderProfile:React.FC<headerprofile> = ({
    follower,
    following,
    achivment,
    users
}:headerprofile) => {
    return<>    <div className=" flex 
      w-full mt-3">
    <div className="grid md:gap-10 gap-3 grid-cols-3 w-full text-center text-[20px]">
    <div className="basis-1/3 flex text-[18px] flex-col ">
   <h4 className="md:text-[24px]">{follower} People</h4>
   <div className="flex items-center">
   <UsergroupAddOutlined
   className="mx-2 text-blue-700 px-2 text-[1rem]"/>
   <p className="text-zinc-400  md:text-[14px] text-[12px] truncate">follower</p>
   </div>
   </div>
        
   <div className="basis-1/3 flex text-[18px]  flex-col ">
   <h1 className="md:text-[24px]">{following} People</h1>
   <div className="flex items-center">
   <LinkOutlined
   className="mx-2 text-blue-700 px-2 text-[1rem]"/>
   <p className="text-zinc-400  md:text-[14px] text-[12px] truncate">following</p>
   </div>
   </div>

   <div className="basis-1/3 flex  flex-col  text-[18px]  text-center">
   <h1 className="md:text-[24px] ">{achivment} Modal</h1>
   <div className="flex items-center">
   <TrophyOutlined
   className="mx-2 text-blue-700 px-2 text-[1rem]"/>
   <p className="text-zinc-400  md:text-[14px] text-[10px] truncate">achivment</p>
   </div>
   </div>

   
 
    </div>
    
    </div>
    <span className="flex gap-3 text-[14px] flex-wrap border-none md:border-b py-5">
    <Button 
    icon={<UserAddOutlined/>}
    className={`md:text-[14px] ${users ? "" : "w-full"} dark:bg-cyan-600 border-none bg-zinc-900 text-white font-nokora text-[12px]`}>
        {
            users ? "Edit Profile" : "follow"
        }</Button>
        {
            users ? <Button 
            className={` ${users ? "" : "w-full"} 
            font-nokora md:text-[14px] text-[12px]`}>
                Change Profile Picture</Button> 
            : <></>
        }
    </span>
  
    </>
}

export default HeaderProfile