import { CommentOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons"



const ReactContent:React.FC = ()=>{
    return <div>
        <ul className="flex gap-3 text-[14px] dark:text-neutral-300 text-neutral-500">
            <li className="inline-flex gap-2">
                <button className="inline-flex gap-2 
                items-center
                dark:active:bg-slate-700
                rounded-md
                 active:bg-neutral-50">
                <LikeOutlined></LikeOutlined>
                <p>like</p>
                </button>
                </li>
            <li>
            <button className="inline-flex gap-2
                    dark:active:bg-slate-700 
                    items-center
                    rounded-md
                 active:bg-neutral-50">
                <CommentOutlined></CommentOutlined>
                <p>comment</p>
                </button>
                </li>

            <li>
                <button className="inline-flex
                active:bg-neutral-50
                    rounded-md
                 dark:active:bg-slate-700
                  gap-2 items-center">
                <ShareAltOutlined/>
                <p>share</p>
                </button>
                </li>
        </ul>
    </div>
}

export default ReactContent