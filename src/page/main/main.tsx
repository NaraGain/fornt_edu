import React from "react";
import Bagde from "../../components/bagde";
import Feed from "./components/feed";
import LeftBar from "./components/leftBar";
import RigthBar from "./components/rightBar";
import { Button } from "antd";

const Main:React.FC = ()=>{
    return (
        <div className="flex top-[3.4rem] relative gap-5 overflow-y-auto
                         max-w-4xl w-full my-4 mx-auto ">
           <div className="basis-[20%]  overflow-y-auto">
            <div className="w-full fixed">
            <LeftBar/>
            <RigthBar/>
            </div>
           </div>
           
           <div className="basis-[80%]">
            <Feed/>
            <Feed/>
           </div>
        </div>
    )
}

export default Main;