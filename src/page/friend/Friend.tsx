import { ArrowLeftOutlined } from "@ant-design/icons"
import NavigatorButton from "../../components/navigateButton"
import { useNavigate, useParams } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import { ProfileContext } from "../profile/profile"
import { useQuery } from "react-query"
import { GetFriend } from "../../api/friend"
import { AvatarUser } from "../../components/Avatar"

export const Friend:React.FC = () =>{
const {type}  = useParams()
const navigate = useNavigate()
const userid = localStorage.getItem('friend')
const handleNavigateBack = ()=>{
    localStorage.removeItem('friend')
    navigate(-1)
}


const {data , isLoading , isFetching} =
 useQuery(['friendList', userid], ()=>GetFriend({
    userid : userid as string
 }))


console.log(data)
    return <>
        <div className="px-4 py-3 md:ml-14 max-w-3xl 2xl:max-5xl overflow-hidden">
            <button 
            onClick={handleNavigateBack}
            className="flex gap-2 items-center">
                <ArrowLeftOutlined/>
               {type}
            </button>
            {
                type === "follower" ? <div className="py-3">
                {data?.result && data?.result?.follower.map((items:any, key:any)=> <React.Fragment key={items?.userid2}>
                <div className="flex gap-3 items-center">
                <AvatarUser size={30} src={items?.Initiator?.userInfoInstance?.profile_url}/>
                <div className="">
                <p className="font-medium text-slate-700 dark:text-neutral-50
                 text-[14px] tracking-wide">{items.Initiator?.username}</p>
                <label className="text-purple-500 text-[12px] tracking-wide" htmlFor="">{items?.status}</label>
                </div>
                </div>
                </React.Fragment>)}
                </div> : <div className="font-thin text-[20px] text-neutral-500">
                No Follower
                </div>
            }
            {
                type === "following" ?
            <div className="py-3">
                {data?.result && data.result?.following.map((items:any, key:any)=> <>
                <div className="flex gap-3 items-center">
                <AvatarUser size={30} src={items?.Receiver?.userInfoInstance?.profile_url}/>
                <div className="">
                <p className="font-medium text-slate-700 dark:text-neutral-50
                 text-[14px] tracking-wide">{items.Receiver?.username}</p>
                <label className="text-purple-500 text-[12px] tracking-wide" htmlFor="">{items?.status}</label>
                </div>
                </div>
                </>)}
            </div> :  null
}
        </div>
    </>
}