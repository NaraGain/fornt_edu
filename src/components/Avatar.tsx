import { Avatar } from "antd"
import React from "react"


interface AvatarProps {
    username?: string,
    src? : string ,
    size? : number,
    resize?: boolean,
}


export const AvatarUser:React.FC<AvatarProps> = ({size  , src, username , resize}) => {

    const resizeLength =  { xs: 40, sm: 40, md: 40, lg: 40, xl: 42,  xxl: 45}


    return <><Avatar 
    className={src ? "" : "animate-pulse"}
    size={resize ? resizeLength : size}
    src={src}/>
    </>
}