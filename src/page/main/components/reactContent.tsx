import { CommentOutlined, HeartOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons"



const ReactContent:React.FC = ()=>{
    return <div>
        <ul className="flex gap-6 items-center 
         text-[20px] dark:text-neutral-300 text-neutral-500">
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
            <button className="inline-flex gap-2
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
    </div>
}

export default ReactContent