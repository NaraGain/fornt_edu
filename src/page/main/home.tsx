import React from "react";
import Bagde from "../../components/bagde";
import Feed from "./components/feed";
import LeftBar from "./components/leftBar";
import RigthBar from "./components/rightBar";
import { Button, Image } from "antd";

export const Home:React.FC = ()=>{
    return (
        <div className="flex gap-6 ">
            <div>
            <Feed path="https://media.pocketgamer.com/artwork/na-35293-1698781402/dumb-ways-to-die-halloween-23-header_jpg_820.jpg"/>
            <Feed/>
            <Feed path="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bc39b360717105.5a56b085ee4be.jpg"/>
            </div>
           <div className="">
            <div className="fixed ">
            <RigthBar/>
            </div>
           
           </div>
        </div>
    )
}

