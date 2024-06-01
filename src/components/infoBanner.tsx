import React, { Children } from "react";
import { Button } from "antd";

interface infoBanner {
    title? : string,
    description:string,
    image? :string,
    children : string,
}

export const InofBanner:React.FC<infoBanner> = ({title , description , image, children})=>{
    return  <div className="flex gap-3 flex-col p-6
        my-3 mx-4 md:mx-0
justify-center  items-center">
   <img 
   className="object-fit h-40 w-40"
   src={image}/> 
   <div className="space-y-3">
<h1 className="text-[20px] text-start font-semibold
 dark:text-neutral-100 text-[#640D6B]">{title}</h1>
<p className="text-[14px]
 dark:text-neutral-100
  break-words w-[20rem] 
  text-justify text-slate-700">
{description}
</p>
<button className="bg-[#7469B6] dark:border-none
active:bg-purple-700
 rounded-full py-1.5 px-3 text-[14px] dark:text-neutral-100
 text-white font-nokora">{children}</button>
</div>

</div>
}