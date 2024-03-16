import React from "react";
import Bagde from "../../components/bagde";
import Feed from "./components/feed";
import LeftBar from "./components/leftBar";
import RigthBar from "./components/rightBar";
import { Button, Image } from "antd";

export const Home:React.FC = ()=>{
    return (
        <div className="md:flex md:gap-6  ">
            <div className="md:basis-[80%] flex flex-col justify-center items-center">
            <Feed
            username="visal"
            profile={"https://api.dicebear.com/7.x/miniavs/svg?seed=8"} 
            path="https://media.pocketgamer.com/artwork/na-35293-1698781402/dumb-ways-to-die-halloween-23-header_jpg_820.jpg"/>
            <Feed
            username="pricilla"
            profile="https://api.dicebear.com/7.x/miniavs/svg?seed=100"
            />
            <Feed
            username="mika uchi"
            profile="https://api.dicebear.com/7.x/miniavs/svg?seed=20"
            path="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bc39b360717105.5a56b085ee4be.jpg"/>
            </div>
           <div className="">
            <div className="md:fixed  md:basis-[20%] ">
            <RigthBar/>
            </div>
           
           </div>
        </div>
    )
}

