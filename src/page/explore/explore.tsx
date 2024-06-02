
import React, {useState} from "react"
import { InofBanner } from "../../components/infoBanner"
import { useInfiniteQuery } from "react-query"
import { TestQueryPublicFeedWithReactQuest } from "../../api/feed"
import { LoadingOutlined } from "@ant-design/icons"
import { Description } from "../../components/description"
import { AvatarUser } from "../../components/Avatar"
import { Link } from "react-router-dom"
import { TotalLikeAndComment } from "../home/components/PostCardComponets/TotalLikeAndComment"
import { Content } from "antd/es/layout/layout"

type uploadFilesType = {
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



export const Explore:React.FC = () =>{
const [showMore , setShowMore] = useState<boolean>(false)
    const {
        data ,isLoading , error, 
        hasNextPage,
        isFetching,
        isFetchingNextPage, fetchNextPage,
         fetchPreviousPage} = useInfiniteQuery({
        queryKey : ['explore'],
        queryFn : TestQueryPublicFeedWithReactQuest,
        cacheTime : 10000,
        getNextPageParam:(lastPage:Page<result> , pages:Page<result>[]) => {
            return lastPage.result.length ? pages.length + 1 : undefined
        },
        // getPreviousPageParam:(prevPage:Page<result>, pages:Page<result>[])=> {
        //     return prevPage.result.length ?  pages.length - 1 : undefined
        // }

    })

  

    return  <React.Fragment>
    <div className="max-w-4xl mx-auto mt-2 ">
        <h1 className="font-medium text-neutral-600 text-md md:text-[18px] ">Explore</h1>
        {
            data?.pages ? <React.Fragment>
            <div className="md:columns-2 lg:columns-3 gap-4 p-4 sm:p-1 mt-2">
            {
    data.pages.map((page, i) => {
        // Filter posts that have uploadFiles
        const postsWithUploadFiles = page?.result
        
        return (
            <React.Fragment key={i}>
                {postsWithUploadFiles.map((item, key) => (
                    <div className="rounded-md animate-in zoom-in duration-200" key={key}>
                        <Link 
                            className="p-4 mb-3 w-full flex flex-col
                             overflow-hidden rounded-[5px]
                             break-inside-avoid 
                             hover:ring-2 ring-gray-300 hover:ring-sky-400
                              transform duration-200
                               hover:shadow-sky-200
                                hover:shadow-md z-0 relative
                            bg-white border" to={`/p/${item?.userInstance?.username}/feed`}
                        >    
                            <div className="py-2">
                            <Description desc={item?.content.substring(0,150)}/>
                            </div>
                            {
                                item.uploadFiles.length > 1 ? (
                                    item.uploadFiles.map((file:any, fileKey) => (
                                        <React.Fragment key={fileKey}>
                                            <img 
                                                className="absolute inset-0 h-full w-full object-cover
                                                object-center transition
                                                duration-200 group-hover:scale-110" 
                                                loading="lazy"
                                                src={file?.upload_url} 
                                                
                                            />
                                        </React.Fragment>
                                    ))
                                ) : (
                                    item.uploadFiles.map((file:any, fileKey) => (
                                        <React.Fragment key={fileKey}>
                                            <img 
                                                className="absolute inset-0 h-full w-full object-cover
                                                object-center transition
                                                duration-200 group-hover:scale-110" 
                                                loading="lazy"
                                                src={file?.upload_url} 
                                               
                                            />
                                            <div className="pointer-events-none absolute inset-0 
                                            bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                            </div>
                                        </React.Fragment>
                                    ))
                                )
                            }
                            
                             <span className=" inline-flex z-10 gap-2 relative  text-slate-700 tracking-wide ">
                                <div className="bg-gradient-to-r from-pink-500
                                 via-red-500 to-yellow-500 p-[1px] rounded-full">
                                <AvatarUser src={item?.userInstance?.userInfoInstance?.profile_url} />
                                </div>
                                <p className={ `${ item?.uploadFiles?.length ? "text-white font-medium" 
                                : "text-[16px] font-medium"}`}>{item?.userInstance?.username}</p>
                            </span>
                            <span className={`z-10 ${ item?.uploadFiles?.length ? "text-white" : ""}`}>
                            <TotalLikeAndComment pid={item?.postid}/>
                            </span>
                            
   
                        </Link>
                    </div>
                ))}
            </React.Fragment>
        );
    })
}
            </div>
                 <div className="py-2 text-center">
        <button
        className="bg-neutral-50 rounded-md px-2 py-1 text-[14px]"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? <LoadingOutlined/>
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div className="text-neutral-500">
        {isFetching && !isFetchingNextPage ? 'Background Updating...' : null}
      </div>
            </React.Fragment>
            :
   <InofBanner
    title="explore"
    image="https://cdni.iconscout.com/illustration/premium/thumb/man-commenting-on-social-media-6329627-5210311.png?f=webp"
    description="With our Try it Yourself editor, you can edit the HTML code and view the result"
   children={"explore someting"}
   />
        }
</div>
    </React.Fragment>
}