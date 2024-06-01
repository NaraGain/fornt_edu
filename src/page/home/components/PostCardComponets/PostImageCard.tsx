import React from "react";
import { Carousel, ConfigProvider, Image } from "antd";
import { Link } from "react-router-dom";


interface feedContent {
    path? : string | string[] | any,
    size? : string,
    type? : string,
   
}

const PostImageCard:React.FC<feedContent> = ({path ,size ,type}:feedContent) =>{
    return <div className="relative w-full">
        {
            path ? (typeof path == 'string' ? (
                <img 
                loading="lazy"
                className="object-fit md:rounded-[6px] 
                 border-[1px] dark:border-neutral-700
                  border-neutral-200 relative" src={path}/>
            ) : (
                path.length > 1 ? <>
                <ConfigProvider
                theme={{
                    components: {
                      Carousel: {
                      dotHeight : 10,
                      },
                    },
                  }}
                >
                <Carousel 
                arrows
                infinite={false}
                dotPosition="bottom">
                    {
                        path?.map((item:any,key:any)=><React.Fragment key={key}>
                        <img
                        loading="lazy"
                        className="w-full border-[1px] bg-zinc-900 rounded-[5px] object-contain h-[30rem]"
                        src={item.upload_url}/>
                        </React.Fragment> 
                        
                        )
                    }
                </Carousel>
                </ConfigProvider> 
                </> :
                <Link to="#">
                {    path[0]  ?
                <img 
                loading="lazy"
                style={{width: '100%'}}
                 className={`${path[0] ? 'object-cover border-[1px] dark:border-neutral-700 '
                 +' border-neutral-200 md:rounded-[5px]'
                  : 'h-[10rem] w-full'}`} src={path[0]?.upload_url}/> :
                   <></>
                }
                </Link>
                
            )): null
            
        }
        </div>
}


export default PostImageCard;