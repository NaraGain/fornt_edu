import React from "react";
import { UsergroupAddOutlined, UserOutlined, TrophyOutlined } from "@ant-design/icons";

interface headerprofile {
    follower? : string,
    following? : string,
    achivment? : string

}


const HeaderProfile:React.FC<headerprofile> = ({
    follower,
    following,
    achivment
}:headerprofile) => {
    return    <div className="dark:bg-zinc-900 flex 
     items-center w-full 
     static py-7
     rounded-xl     bg-gradient-to-l from-blue-50 to-white ">
    <div className="grid grid-cols-3 w-full text-center text-[20px]">
        <div className="basis-1/3
            space-y-2
         text-[16px] flex flex-col items-center ">
            <div className="">
            <UsergroupAddOutlined
             className="mx-2 text-[2rem] text-zinc-600"/>
            </div>
           <h1>follower {follower}</h1></div>
   <div className="basis-1/3 text-[16px] space-y-2 text-center">
   <UserOutlined
   className="mx-2 text-zinc-600 text-[2rem]"/>
   <h1>following {following}</h1>
   </div>
   <div className="basis-1/3 text-[16px] space-y-2">
    <TrophyOutlined
    className="text-[2rem] text-zinc-600"
    />
    <h1>
    Achivment {achivment}</h1>
    </div>
 
    </div>
    </div>
}

export default HeaderProfile