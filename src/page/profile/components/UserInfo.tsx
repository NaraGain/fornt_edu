import React, { useContext} from "react"
import { Avatar } from "antd"
import { ProfileContext } from "../profile"

import { Description } from "../../../components/description"



export const UserInfo = () =>{
    const {data} = useContext(ProfileContext)
   
   
  

   
    return <React.Fragment>
       <div className="px-4 md:px-0 w-full flex-col justify-between md:flex ">
        <div className="block md:inline-flex w-full gap-5  ">
                <Avatar
                    size={{xs:80,sm:90,md:100,lg:90,xl:120, xxl: 150}}
                    className={data?.userInfoInstance
                         ? `cursor-pointer border-[2px] border-neutral-100` : `animate-pulse `}
                     src={ data?.userInfoInstance?.profile_url}
                     >
             </Avatar>
             <div className="tracking-wide">
            <h1 className="md:text-[24px] tracking-wide font-medium">
                {data?.firstname} {data?.lastname}</h1>
            <p className="text-sm
                mb-4
             dark:text-neutral-400 text-neutral-400">@{data?.username}</p>
               <Description desc={data?.userInfoInstance?.bio as string}/>
            </div>
               </div>
             </div>
    </React.Fragment>

}