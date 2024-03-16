import { StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { InofBanner } from "../../components/infoBanner";



export const Fravorite:React.FC = () => {

        return <div className="max-w-4xl mx-auto">

          
             <InofBanner 
             image="https://cdni.iconscout.com/illustration/premium/thumb/no-message-8316264-6632284.png?f=webp"
                title="Fravorite"
                description="With our Try it Yourself editor, you 
                 can edit the HTML code and view the result:"
                 children="add fravorite"
            />
        </div>

}