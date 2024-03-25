import React, { Children } from "react";
import { Button } from "antd";

interface infoBanner {
    title? : string,
    description:string,
    image? :string,
    children : string,
}

export const InofBanner:React.FC<infoBanner> = ({title , description , image, children})=>{
    return  <div className="flex gap-3 flex-col p-6 rounded-xl
    bg-blue-50
        my-3 mx-4 md:mx-0
    dark:bg-slate-700/30
justify-center  items-center">
   <img 
   className="object-fit h-40 w-40"
   src={image}/> 
<h1 className="text-[20px] font-semibold dark:text-neutral-100 text-blue-500">{title}</h1>
<p className="text-[14px] dark:text-neutral-100 break-words w-[20rem] text-center text-neutral-500">
{description}
</p>

<Button className="bg-[#1997BE] dark:border-none
 rounded-md dark:text-neutral-100
 text-white font-nokora">{children}</Button>
</div>
}