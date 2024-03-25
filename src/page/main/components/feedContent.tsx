import React from "react";
import { Carousel, ConfigProvider, Image } from "antd";


interface feedContent {
    path? : string | string[],
    size? : string,
    type? : string,
}

const FeedContent:React.FC<feedContent> = ({path ,size ,type}:feedContent) =>{
    return <div className="py-2">
        {
            path && (typeof path == 'string' ? (
                <Image className="rounded-md object-fit relative -z-10" src={path}/>
            ) : (
                path.length > 1 ? <>
                <ConfigProvider
                theme={{
                    components: {
                      Carousel: {
                      dotHeight : 10
                      },
                    },
                  }}
                >
                <Carousel dotPosition="bottom">
                    {
                        path?.map((item,key)=><>
                        <Image
                        className="rounded-md object-fit relative z-10"
                        key={key}  src={item}/>
                        </> 
                        
                        )
                    }
                </Carousel>
                </ConfigProvider>
    
                </> :<>
                <Image className="rounded-md object-fit" src={path[0]}/>
                </>
            ))
            
        }
        </div>
}


export default FeedContent;