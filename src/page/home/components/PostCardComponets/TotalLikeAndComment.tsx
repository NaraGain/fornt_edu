import React, { useState } from "react"
import { Link } from "react-router-dom"
import { countLikeAndComment } from "../../../../api/feed"
import { useQuery } from "react-query"


type totalLikeAndComment = {
   result : {countLike : number,
    countComment: number }
}
 
export const TotalLikeAndComment:React.FC<{pid : string}> = ({pid}) =>{
   const {data , isLoading , error} = useQuery<totalLikeAndComment , Error>({
        queryKey : ['likeAndCommentCount', {postid : pid}],
        queryFn : () => countLikeAndComment({
            postid : pid as string
        }),
        refetchOnWindowFocus : false,
        enabled : pid ? true : false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        keepPreviousData : true,
   })    

    return <>
     {error ? <>{error.message}</> :
       <div className={isLoading ?
       "animate-pulse py-2 bg-neutral-200 flex w-[10rem] rounded-full" 
       :  "inline-flex gap-2 items-center" }>
            <div className={isLoading ? 'animate-pluse' :"flex gap-2 text-[12px]"}>
            <p className={isLoading? "hidden" :"dark:text-neutral-200 tracking-wide"}>
                like by {data?.result?.countLike} people</p>
            </div>
            <Link to={`/pv?post=${pid}`}> 
            <div className="flex  gap-2 text-[12px]">
            <p className={isLoading ? "hidden":""}>comment {data?.result?.countComment}</p>
            </div>
            </Link>
           
                </div>
}
    </>
}