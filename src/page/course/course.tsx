import React from "react";
import NavigatorButton from "../../components/navigateButton";
import { Button } from "antd";
import { InofBanner } from "../../components/infoBanner";

export const Course:React.FC = () => {
        return <div className="">
                <div className="max-w-4xl mx-auto ">
               <InofBanner
                title="Course"
                image="https://cdni.iconscout.com/illustration/premium/thumb/search-8949508-7314176.png?f=webp"
                description="With our Try it Yourself editor, you can edit the HTML code and view the result"
               children={"Find Course"}
               />
        </div>
                </div>
            



}