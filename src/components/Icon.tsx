import React from "react";

interface IconProps {
  icon : JSX.Element,
  bgColor? : string | null,
  iconColor? : string | null,
}

const Icon:React.FC<IconProps> = ({icon, bgColor , iconColor}:IconProps)=>{
    return <div 
    className={`bg-[#7469B6] flex gap-4 items-center
    rounded-md  text-${iconColor} px-1.5 py-1.5 `}>
    {icon}
    </div>
}


export default Icon;