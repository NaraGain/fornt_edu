import { Avatar, Tooltip } from "antd"
import { findAllUserLikePost } from "../../../../api/feed"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { result } from "../../home"


interface ShowUserLikePostProps {
    postid : string,
}

interface userLikePost {
    result : [any]
}

export const ShowUserLikePost = ({postid}:ShowUserLikePostProps) => {
    const {data,isLoading, error} = useQuery<userLikePost,Error>({
        queryKey : ['userLike', postid],
        queryFn : () => findAllUserLikePost(postid),
        enabled : postid ? true : false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        keepPreviousData : true,

    })
   
    

    return <>
    {error ? <>{error.message}</> : 
    <ul className={isLoading ?
         "bg-neutral-200 animate-pulse w-20 rounded-full" : ''}>
             {data?.result?.length ?  <Avatar.Group
    maxCount={4}
    size={22}
    maxStyle={{
        color: '#7469B6',
        backgroundColor: '#EEEEEE',
      }}
    >
      {
         data?.result?.map((items:any ,key)=><li key={key}>
         <Tooltip
         title={items?.username}>
            <Avatar
            size={22}
            className="border-[1px] border-neutral-300"
             src= {items?.profile_url ? 
             items?.profile_url : ``}/>
              </Tooltip>
             </li>     
            
            )
        }       
    </Avatar.Group> : null
}
    </ul>
}
    </>
}