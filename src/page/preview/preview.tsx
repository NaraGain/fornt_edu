import { ArrowLeftOutlined, ArrowRightOutlined,
     CloudUploadOutlined } from "@ant-design/icons"
import { Image,Button, Form, message, Input } from "antd"
import { Link, useLocation } from "react-router-dom"
import { createCommentPost, deleteComment, getPostOne, getcommentPost } from "../../api/feed"
import React, {  useContext, useEffect,  useState } from "react"
import moment from "moment"
import { ShowUserLikePost } from "../home/components/PostCardComponets/showUserLikePost"
import { OpenModal, ReactContent } from "../home/components/PostCardComponets/reactContent"
import { UserContext } from "../../auth/ProtectedRoute"
import { Description } from "../../components/description"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { AvatarUser } from "../../components/Avatar"
import NavigatorButton from "../../components/navigateButton"
import { TotalLikeAndComment } from "../home/components/PostCardComponets/TotalLikeAndComment"



export type uploadFiles = {
    upload_id : string,
    post_id : string,
    upload_url : string,
    created_at : Date,
}

interface postProps {
    postid: string | null ,
    userid : string,
    content : string | null,
    created_at : Date
    updated_at : Date,
    userInstance : {
        username : string,
        userInfoInstance : {
            infoid : string,
            profile_url : string,
        }
    },
    uploadFiles : uploadFiles[]
   
    
}

export interface commentPost {
    commentid : string | null,
    comment : string,
    created_at : Date,
    userInstance : {
        userid : string,
        username : string,
        userInfoInstance: {
            infoid : string,
            profile_url : string,
        },
    },
   
}




export const Preview:React.FC  = () => {
const {state:stateOpenModal, dispatch:dispatchModal} = useContext(OpenModal)
const [currentImage , setCurrentImage] = useState<number>(0)
const [messageApi, contextHolder] = message.useMessage()
const [comment ,setComment] = useState<commentPost[]>([])
const [commentInput ,setCommentInput] = useState<string | null>(null)
const [post ,setPost] = useState<postProps | null>(null)
// const postid = stateOpenModal?.postid  
const currentUser:any = useContext(UserContext)
const [loading , setLoading] = useState<boolean>(false)
const [showMore , setShowMore] = useState<boolean>(false)
const location = useLocation()
const serachParams = new URLSearchParams(location.search)
const postid = serachParams.get('post')
const queryClient = useQueryClient()

    
const getPost = async () => {
    try {
        setLoading(true)
        const response = await getPostOne({
            postid: postid as string
        })
    
        if(response.sucess){
            setPost(response.result)
        }
        setLoading(false)
    } catch (error) {
        messageApi.error('unkonw error')
    }
}

const {data:commentData , isLoading:commentLoading ,isFetched} = useQuery(['comment', postid],
 ()=> getcommentPost({
    postid : postid
 }),
 {
    enabled : postid ? true : false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10,
 }
)

const {isLoading:loadingAddComment, mutate, 
    isSuccess} = useMutation(createCommentPost, {
    onSuccess : (data:any) => {
            if(data.success){
                messageApi.success(data.message)
                queryClient.invalidateQueries(['likeAndCommentCount'])
                queryClient.invalidateQueries(['comment'])
            }else{
                messageApi.error(data.message)
            }
    },
    onError : () => {
        messageApi.error(`error post comment`)
    }
})

const handleAddComment = async (value:any) => {
    try {
        await mutate(value)
    } catch (error:any) {
        messageApi.error(error)
    }
}

const deleteItem = async (id: string, commentUserid:string) => {
    // Filter out the item with the provided id
    if(currentUser.userid == commentUserid){
        //
        const response = await deleteComment({
            commentid : id,
            userid : commentUserid
        })
         // Update the state with the filtered items
        const updatedItems = comment.filter(item => item.commentid !== id);
        setComment(updatedItems);
        queryClient.invalidateQueries(['likeAndCommentCount'])
       queryClient.invalidateQueries(['comment'])
    } 
  };


const handlePrevClick = () => {
    if( currentImage > 0){
        setCurrentImage(currentImage - 1)
    }
}  

const handleNextClick = () => {
    const data = post?.uploadFiles?.length ?? 0;
    const next = data - 1
    
    if (currentImage < next) {
      setCurrentImage(currentImage + 1);
    }
  };

useEffect(()=> {
    getPost()
},[])



     return  <>
     {contextHolder}
        <div className="h-screen md:ml-14 flex flex-col max-w-sm px-4 py-3
       bg-white  overflow-hidden md:max-w-lg">
        <label className="flex gap-2 items-center mb-2">
            <NavigatorButton icons={<ArrowLeftOutlined/>}/>
            <p>Comment</p>
            </label>

  <Link to={`/p/${post?.userInstance?.username}/feed`}
   className="flex py-3 items-center gap-2">
    
    <AvatarUser src={post?.userInstance?.userInfoInstance?.profile_url}/>
    <p className="font-medium">{post?.userInstance.username}</p>
  </Link>
  <div className="flex flex-row 
  bg-neutral-50 px-3 py-2 rounded-lg overflow-hidden overflow-y-auto
    dark:border-gray-700 my-2 dark:bg-gray-800 dark:hover:bg-gray-700">
        {post?.uploadFiles?.length !==0 ? <React.Fragment> {
      post?.uploadFiles &&  post?.uploadFiles?.length === 1 ?
    <img  className="object-cover w-full border rounded-lg h-96 
    md:h-auto md:w-[10rem]  md:rounded-md" 
    src={post?.uploadFiles[0]?.upload_url} alt=""/>:
    <React.Fragment>  
<div  className="relative w-full" data-carousel="static">
    <div className="relative md:auto overflow-hidden  ">
        <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
            height={150}
            width={250}
            src={post?.uploadFiles[currentImage]?.upload_url}
             className="absolute block rounded-md border border-neutral-100
              w-full h-full bg-slate-400 object-cover 
             -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
    </div>
   
    <button onClick={handlePrevClick} 
    className="absolute top-0 start-0 hover:bg-none z-30 flex
     items-center justify-center 0 h-full px-4 cursor-pointer group 
     focus:outline-none" data-carousel-prev>
        <span className="bg-slate-700/40 text-neutral-50
         px-2 py-1 rounded-full border border-neutral-400">
        <ArrowLeftOutlined/>    
        </span>
  
    </button>
    <button onClick={handleNextClick} 
     className="absolute border-none top-0 end-0 z-30 flex items-center
     justify-center h-full text-white px-4 cursor-pointer 
     group focus:outline-none" data-carousel-next>
        <span className="bg-slate-700/40 text-neutral-50
         px-2 py-1 rounded-full border border-neutral-400">
        <ArrowRightOutlined/>    
        </span>
    </button>

</div>

    </React.Fragment>
}
</React.Fragment> : <></> }
    <div className={`${post?.uploadFiles?.length === 0 ? "px-0" 
    : "px-4"} flex-1 overflow-hidden overflow-y-auto leading-normal`}>
    <p className="text-[14px] overflow-hidden overflow-y-auto  dark:text-neutral-300
             text-neutral-800 break-words">
                {showMore ? <Description desc={post?.content as string}/> 
                : <Description desc={post?.content?.substring(0,150) as string }/> }
                </p>
                { post?.content && post?.content?.length > 255 ?
                <button
                className={"text-[12px] font-medium"}
                onClick={()=>{setShowMore(!showMore)}}>
                    {showMore ? "read less" : "read more"}</button>
                : null
                }
    </div>

</div>
     {/* commentlist        */}
    <div className="flex-1 overflow-hidden overflow-y-auto">
    {
                        commentData?.result?.length === 0 ? <div 
                        className="text-center font-light text-neutral-400">
                            <h1>No Comment</h1>
                        </div>: 
                        <ul className="py-3 px-2">
                            {
                                commentLoading ? <li className="flex gap-2">
                                    <div className="w-4 h-4 rounded-full animate-pulse"></div>
                                    <div className="w-24 rounded-full py-1 animate-pulse"></div>
                                </li> :<>
                            {
                                commentData?.result?.map((comment:commentPost)=>
                                 <li  key={comment?.commentid} className="flex my-2 items-center gap-2 ">
                                    <AvatarUser 
                                    size={30}
                                    src={comment?.userInstance?.userInfoInstance?.profile_url}/>
                                    <div>
                                    <div className="flex  gap-2">
                                        <p className="text-[12px] font-medium">{comment?.userInstance?.username}</p>
                                        <p className="text-[12px] text-neutral-600">
                                        {comment?.comment}
                                    </p>
                                        </div>
                                    <span className="flex text-neutral-500 mx-1 gap-2 text-[10px]">
                                    <p>{moment(comment?.created_at).fromNow()}</p>
                                    {
                                        post?.userid === comment?.userInstance?.userid ?
                                         <p className="font-medium text-slate-800">auth</p> : <></>
                                    }
                                    {
                                        currentUser?.userid === comment?.userInstance?.userid ? <React.Fragment>
                                        <button>edit</button>
                                        <button onClick={()=>
                                        deleteItem(comment?.commentid as string 
                                        , comment?.userInstance?.userid)}>delete</button>
                                        </React.Fragment>
                                        :<></>
                                    }
                                    </span>
                                    </div>
                                   
                                </li>)
                            }
                            </>
                        }
                         </ul> 
    }
    
    </div>
    <div className="pt-2">
    <ReactContent pid={postid as string}/>
    <span className="flex gap-2 py-1 items-center">
    <ShowUserLikePost postid={postid as string}/>
    <TotalLikeAndComment pid={postid as string}/>
        </span>
    
    </div>
    
    <div className="py-2">
        <Form 
        onFinish={handleAddComment}
        className="flex gap-2 w-full items-center">
            <Form.Item 
            className="hidden"
            name="userid" initialValue={currentUser?.userid}>
                <Input/>
            </Form.Item>
            <Form.Item className="w-full" name="comment">
            <Input placeholder="add some text..."/>
            </Form.Item>
            <Form.Item initialValue={postid} name="postid">
                <Button loading={loadingAddComment} htmlType="submit" icon={<CloudUploadOutlined/>} />
            </Form.Item>
        </Form>
    </div>
</div>

            </>
}

