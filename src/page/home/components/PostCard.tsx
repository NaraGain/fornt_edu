import React, {  useContext, useState } from "react"
import PostImageCard from "./PostCardComponets/PostImageCard";
import {ReactContent} from "./PostCardComponets/reactContent";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { ShowUserLikePost } from "./PostCardComponets/showUserLikePost";
import { MoreButton } from "./PostCardComponets/MoreButton";
import { AvatarUser } from "../../../components/Avatar";
import { Description } from "../../../components/description";
import { UserContext } from "../../../auth/ProtectedRoute";
import { TotalLikeAndComment } from "./PostCardComponets/TotalLikeAndComment";




interface PostCardProps {
    path? : string[] | undefined,
    profile?:string,
    username?:string,
    describe :string | null,
    postid? : string,
    date? : Date,
    userid? : string,
    isLoading? : boolean,

}




const PostCard:React.FC<PostCardProps> = ({path, postid, userid, username, date, profile,describe})=>{
    const navigator = useNavigate()
    const currentUser:any = useContext(UserContext)
    const [showMore , setShowMore] = useState<boolean>(false)

    return<React.Fragment>
      <div className="py-3 relative w-full  md:max-w-[30rem] 2xl:max-w-[35rem] 
           dark:border-zinc-700
        shadow-gray-100/100 dark:shadow-slate-900/30 text-neutral-600
         justify-center">
        <span className="flex items-center md:px-0 px-2 justify-between gap-2">
        <a onClick={()=> navigator(`/p/${username}/feed`)}
         className="inline-flex gap-2 cursor-pointer items-center">
        <AvatarUser 
        resize={true}
        src={profile}/>
        <span>
        <p className="tracking-wide font-medium dark:text-neutral-50
         text-neutral-900 dark:text-neutral-200text-[16px]">{username}</p>
          <div className={`flex text-[10px] items-center`}>
            {
            currentUser?.userid == userid ? 
              <p className="font-medium dark:text-neutral-100 mr-1">author</p> : null
            }
        <p className="text-neutral-500
         dark:text-neutral-100 ">
         {date && date ? moment(date).calendar() 
         : moment(Date.now()).fromNow()}
        </p>
          </div>   
        </span>  
        </a>
        <div>
          <MoreButton
          userid={userid as string}
          postid={postid as string}
          filePath={path}
          />
        </div>
        </span>
        {
            describe && describe === "0" ? null :
            <div className={"inline-block md:px-0 px-2"}>
            <p className="text-[14px] pt-3 dark:text-neutral-100
             text-neutral-800 break-words">
                {showMore ? <Description desc={describe as string}/> 
                : <Description desc={describe?.substring(0,150) as string }/> }
                </p>
                { describe && describe.length > 255 ?
                <button
                className={"text-[12px] dark:text-neutral-100"}
                onClick={()=>{setShowMore(!showMore)}}>
                    {showMore ? "read less" : "read more"}</button>
                : null
                }
                </div>
                
                }

                    <div className={path && path?.length > 0 ? `py-5 w-full` 
              : `py-0 w-full `}>
            <span>
              <PostImageCard  path={path}/>
            </span>

                <div className="mx-2 md:mx-0">
                <TotalLikeAndComment pid={postid as string}/>
                </div>
               
               <div className="py-2 md:mx-0 relative mx-2 space-y-2">
                <ShowUserLikePost
                postid={postid as string}></ShowUserLikePost>
                <ReactContent pid={postid}/> 
                </div>
       
        </div>
       
    </div>
    </React.Fragment>
}

export default PostCard;