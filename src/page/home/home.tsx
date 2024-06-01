import React, { useContext,useState, useEffect, useRef, useCallback} from "react";
import RigthBar from "./components/rightBar";
import { TestQueryPublicFeedWithReactQuest } from "../../api/feed";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../auth/ProtectedRoute";
import { CreateContent, OpenModalContext } from "../../components/createContent/createContent";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { AvatarUser } from "../../components/Avatar";
import { useInfiniteQuery,} from "react-query";
import PostCard from "./components/PostCard";
import { LoaderPostCard } from "../../components/loader/loaderPostCard";
import { restoreScrollPosition, saveScrollPosition } from "../../utils/scroll";



type uploadFiles = {
    upload_id : string,
    post_id : string,
    upload_url : string,
    created_at : Date,
}

export interface result {
    content : string,
    created_at : Date,
    postid : string,
    upldated_at: string,
    uploadFiles : string[]
    userInstance : {
        username : string,
        firstname : string,
        lastname : string,
        userid : string,
        userInfoInstance : {
            infoid : string,
            userid : string,
            profile_url : string,
        }
    }

}

export interface Page<T> {
    result: T[];
    previousCursor?: number;
    nextCursor?: number;
  }

  

export const Home:React.FC = ()=>{
const currentUser:any = useContext(UserContext)
const {state} = useContext(OpenModalContext)
const location = useLocation();
const scrollKey = `scroll-position-${location.pathname}`;


const {data,error, isLoading
    ,isFetchingNextPage , 
    isFetchingPreviousPage, 
    hasNextPage,
    isFetching,
    fetchNextPage,
    hasPreviousPage,
    isError} = useInfiniteQuery<Page<result>, Error>({
            queryKey : ['home'],
            
            queryFn : TestQueryPublicFeedWithReactQuest,
            staleTime: 1000 * 60 * 5, // 5 minutes
            cacheTime: 1000 * 60 * 10, // 10 minutes
            keepPreviousData : true,
            getNextPageParam : (lastPage:Page<result> ,pages:Page<result>[]) => {
              return  lastPage?.result.length ? pages?.length + 1 : undefined
            }
        },
        
     )

  const observerElement = useRef<IntersectionObserver>()

  const lastItemRef = useCallback((node:any)=>{
    if(isFetchingNextPage) return;
    if(observerElement.current) observerElement.current.disconnect();
    observerElement.current = new IntersectionObserver((entires)=> { 
        if(entires[0]?.isIntersecting && hasNextPage) {
            fetchNextPage()
            }
    })
    if(node) observerElement.current.observe(node)
  } 
  ,[isFetchingNextPage, fetchNextPage, hasNextPage]  )
     
  // useEffect(() => {
  //   restoreScrollPosition(scrollKey);
  //   return () => {
  //     saveScrollPosition(scrollKey);
  //   };
  // }, [scrollKey]);

  

    return (
        <>
       {
        error ? <>Error</> : null
       }
       <div className="md:flex  md:gap-6 ">
            <div className="md:basis-[80%] w-full flex flex-col justify-center items-center">
                <div className="w-full my-2 
                flex px-2 md:px-0 2xl:max-w-[35rem] max-w-[30rem] mx-auto py-3 ">
                    <span className="flex  border-b
                     dark:border-neutral-600 w-full">
                    <div className="inline-flex items-center  gap-2 py-2  ">
                    <Link className="border-[1px] p-[1px] rounded-full" 
                    to={`/p/${currentUser?.username}/feed`}>
                        <AvatarUser
                        size={40}
                        src={currentUser?.userInfoInstance?.profile_url}
                        username={currentUser?.userInstance?.username}
                        />
                    </Link>
                    </div>     
                    <div className=" flex my-2 
                    items-center mx-2
                    text-center  justify-center">    
                    <span className="
                    shadow-gray-500/5 
                     text-center
                     py-[3px] px-2​  text-white">
                    <CreateContent 
                    icons={
                    <div 
                    className="text-center rounded-full
                     text-neutral-500 border border-neutral-400
                      flex justify-center
                     h-10 w-10">
                        <PlusOutlined/></div>
                    }/>
                        </span>           
                 
                    </div>
                    </span>
                </div>
                {
                isLoading ? <LoaderPostCard/> : <></>
                }
                {
                    state?.loading ? <LoaderPostCard/>: null
                }
                <React.Fragment>
                {
                 data?.pages.map((page , i)=> (
                        <React.Fragment key={i}>
                            {
                             page?.result && page.result.map((item:result)=> <React.Fragment
                               key={item?.postid}
                               >
                                <PostCard
                                userid={item.userInstance.userid}   
                               username={item?.userInstance?.username}
                               postid={item?.postid}
                               date={item?.created_at}
                               describe={item?.content}
                               profile={item?.userInstance?.userInfoInstance?.profile_url}
                               path={item?.uploadFiles}/>
                               </React.Fragment>       
                               )
                            }
                        </React.Fragment>
                    ))
                }
                </React.Fragment>
        <div className="py-2  text-center ">
        <button
        ref={lastItemRef}
        className="bg-neutral-50 text-neutral-500 rounded-md px-2 py-1 text-[14px]"
          onClick={() => fetchNextPage()} >
          {isFetchingNextPage
            ? <LoadingOutlined/>
            : hasNextPage
            ? 'Load More'
            : isFetching ? "" : 'Nothing more to load'}
        </button>
      </div>
      <div className="text-neutral-500">
        {isFetching && !isFetchingNextPage ? "backGround Fetching..." : null}
      </div>
            </div>
           <div className="">
            <div className="md:fixed md:basis-[20%] ">
            <RigthBar/>
            </div>
           
           </div>
        </div>
        </>
    )
}

