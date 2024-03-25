import { CommentOutlined, FileOutlined, HeartOutlined, LikeOutlined, PictureOutlined, PlusOutlined, SendOutlined, ShareAltOutlined } from "@ant-design/icons"
import { Avatar, Upload } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"



const ReactContent:React.FC = ()=>{

    const [CommentInput ,setCommentInpt] = useState(false)




    return <><div className="flex pt-2 gap-3 items-center justify-between">
        <ul className="flex gap-6 items-center 
         text-[20px] dark:text-neutral-300 text-neutral-800">
            <li>
            <button className="inline-flex
                active:bg-neutral-50
                    rounded-md
                 dark:active:bg-slate-700
                  gap-2 items-center">
                <HeartOutlined/>
                </button>
                </li>
            <li>
            <button onClick={()=> setCommentInpt(!CommentInput)} className="inline-flex gap-2
                    dark:active:bg-slate-700 
                    items-center
                    rounded-md
                 active:bg-neutral-50">
                <CommentOutlined></CommentOutlined>
                </button>
                </li>

            <li>
                <button className="inline-flex
                active:bg-neutral-50
                    rounded-md
                 dark:active:bg-slate-700
                  gap-2 items-center">
                <ShareAltOutlined/>
                </button>
                </li>
        </ul>
        <span className="flex gap-3 items-center">
        <p className="text-[14px] dark:text-neutral-200 text-neutral-900">Liked</p>
        <Avatar.Group>
            <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=10"
            size={"small"}
            />
            <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=11"
            size={"small"}
            />
              <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=24"
            size={"small"}
            />
            <Link to="#">
            <Avatar size={"small"} 
             style={{ backgroundColor: '#1677ff' }}>
                100
             </Avatar>
            </Link>
             
            </Avatar.Group>
            </span>
    </div>
    {
        CommentInput ? 
    <span className="my-2 flex items-end
     bg-neutral-50
     dark:bg-zinc-800
     dark:border-zinc-700
     rounded-xl border border-neutral-200">
    <textarea
    placeholder="show your idea" 
    className="border font-nokora w-full 
    focus:ring-blue-500 focus:border-blue-500 
    m-2 px-2 py-1 text-[12px]
    dark:bg-zinc-700
    ring-blue-400
      border-none  bg-neutral-50 rounded-lg"/>
    <Upload>
        <div className="bg-yellow-300
        text-white
         my-2 px-1 rounded-md mx-2">
        <PictureOutlined/>
        </div>
    </Upload>
    <button>
    <div className="bg-blue-500
     text-white my-2 px-1 rounded-md mx-2">
       <SendOutlined/>
        </div>
        </button>
    </span>  : <></>
}
    </>
}

export default ReactContent