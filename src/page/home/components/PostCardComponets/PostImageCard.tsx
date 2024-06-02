import React, { useEffect, useState } from "react";
import { Carousel, ConfigProvider, Image } from "antd";
import { Link } from "react-router-dom";



interface feedContent {
    path? : string | string[] | any,
    size? : string,
    type? : string,
   
}

const checkImageExists = async (url:string) => {
    try {
        const img_url = url == undefined ? `/${url}` : url
        const response:any = await 
        fetch(`http://localhost:4000${img_url}` 
        ,{method : 'HEAD'});
        return response.ok;
    } catch (error) {
        alert(error)
        return false
    }
}

export const ImageChecker:React.FC<{imageUrl:string}> = ({imageUrl}) => {
    const [imageExists , setImageExists] = useState(null)

    useEffect(()=>{
        const checkImage = async () =>{
            const exists = await checkImageExists(imageUrl as string)
            setImageExists(exists)
        }
        checkImage()
    }, [imageUrl])
    console.log(imageExists)
    return <>
            <div>
                {imageExists === null && <>checking image ...</>}
                {imageExists == true && <img src={imageUrl} alt="image"/>}
                {imageExists === false && <p>Image dose nto exist.</p>}
            </div>
    </>
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
                        path?.map((item:any,key:any)=>
                        <React.Fragment key={key}>
                        <Image
                        width={"100%"}
                        height={380}
                        loading="lazy"
                        className="w-full border-[1px]
                         bg-zinc-900 rounded-[5px] object-cover h-[40rem]"
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