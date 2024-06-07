import { ArrowLeftOutlined } from "@ant-design/icons"
import { useNavigate, useParams, Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { GetFriend } from "../../api/friend"
import { AvatarUser } from "../../components/Avatar"
import { Button, Tabs } from "antd"
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
    {
      key: '1',
      label: <Link to={`/f/follower`}>Follower</Link>,
      children: null,
    },
    {
      key: '2',
      label:  <Link to={`/f/following`}>Following</Link>,
      children: null,
    },
    {
      key: '3',
      label: 'Achiments',
      children: null,
      disabled : true
    },
  ];


export const Friend:React.FC = () =>{
const {type}  = useParams()
const navigate = useNavigate()
const userid = localStorage.getItem('friend')
const [searchValue, setSearchValue] = useState(""); // Initialize the searchValue state variable as an empty string

const handleNavigateBack = ()=>{
    localStorage.removeItem('friend')
    navigate(-1)
}

const {data , isLoading , isFetching} =
 useQuery(['friendList', userid], ()=>GetFriend({
    userid : userid as string
 }),
{
    enabled : userid ? true : false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10,
}
)

 const [filteredFollower, setFilteredFollower] = useState(data?.result?.follower); 
 const [filteredFollowing, setFilteredFollowing] = useState(data?.result?.following); 




useEffect(()=>{
    if(type == "following"){
        setFilteredFollowing(data?.result?.following?.filter((item:any)=> 
            item?.Receiver?.username.toLowerCase().includes(searchValue.toLowerCase())))
    }else if (type === "follower"){
        setFilteredFollower(data?.result?.follower?.filter((item:any)=> 
            item?.Initiator?.username.toLowerCase().includes(searchValue.toLowerCase())))
    }
}, [searchValue , data])

    return <>
        <div className="px-4 py-3 md:ml-14 max-w-lg 2xl:max-5xl overflow-hidden">
            <button 
            onClick={handleNavigateBack}
            className="flex gap-2 items-center">
                <ArrowLeftOutlined/>
               {type}
            </button>
            <Tabs defaultActiveKey={type =="follower" ? "1" : "2"} items={items}/>
            <div className="w-full">
            <input 
            onChange={(e)=>setSearchValue(e.target.value)}
            placeholder="search" className="py-1.5 w-full md:w-[50%] text-[12px]
             border rounded-md px-2"/>
           

            {
                type === "follower" && <ul className="py-3 w-full md:w-[50%]">
                {data?.result?.follower && data?.reuslt?.follower?.length === 0 ? <>No Follower</> 
                : filteredFollower?.map((items:any, key:any)=> 
                <li className="my-2" key={items?.userid2}>
                <div className="flex gap-3  justify-between items-center">
                <div className="flex gap-3 items-center">
                <AvatarUser size={35} src={items?.Initiator?.userInfoInstance?.profile_url}/>
                <div className="">
                <p className="font-medium text-slate-700 dark:text-neutral-50
                 text-[14px] tracking-wide">{items?.Initiator?.username}</p>
                <label className="text-purple-500 text-[12px] tracking-wide"
                 htmlFor="">{items?.status}</label>
                </div>
                </div>
              
                <button className="ml-5 py-1 text-[12px] px-2 rounded-md tracking-wide
                dark:bg-zinc-600 dark:text-slate-900
                 bg-slate-900 text-white">Remove</button>
                </div>
                </li>)}
                </ul> 
            }
            {
                type === "following" ?
            <ul className="py-3 w-full md:w-[50%]">
                {filteredFollowing && filteredFollowing.map((items:any, key:any)=> <li 
                className="my-3"
                 key={items?.userid}>
                <div className="flex gap-3  justify-between items-center">
                <div className="flex gap-3 items-center">
                <AvatarUser size={35} src={items?.Receiver?.userInfoInstance?.profile_url}/>
                <div className="">
                <p className="font-medium text-slate-700 dark:text-neutral-50
                 text-[14px] tracking-wide">{items.Receiver?.username}</p>
                <label className="text-purple-500 text-[12px] tracking-wide"
                 htmlFor="">{items?.status}</label>
                </div>
                </div>
              
                <button className="ml-5 py-1 text-[12px] px-2 rounded-md tracking-wide
                dark:bg-zinc-600 dark:text-slate-900
                 bg-slate-900 text-white">unfollowing</button>
                </div>
                </li>)}
            </ul> :  null
}
</div>
        </div>
    </>
}