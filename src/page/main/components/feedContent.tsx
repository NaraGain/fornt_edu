import React from "react";
import { Image } from "antd";


interface feedContent {
    path? : string,
    size? : string,
    type? : string,
}

const FeedContent:React.FC<feedContent> = ({path ,size ,type}:feedContent) =>{
    return <div className="py-2">
            <Image
            className="rounded-lg object-fit"
             src={path}
            />
        </div>
}


export default FeedContent;