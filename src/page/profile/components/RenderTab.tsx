import { useParams, Link } from "react-router-dom"
import Feed from "../../home/components/PostCard"
import React, { useEffect, useState } from "react"
import { userFeed } from "../../../api/user"
import { UserPhoto } from "./userPhoto"
import { UserFollower } from "./userFollower"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
interface RenderTabProps {
    tabName : string | null,
}


export const RenderTab = ({tabName}:RenderTabProps) => {
    const [data ,setData] =  useState<[]>([])
    const {username} = useParams()
    
    const userPost = async () => {
        try {
            const response:any = await userFeed({
                username : username as string
            })

            if(response.success){
                setData(
                response.result)
            }else{
                alert(response.message)
            }
        } catch (error:any) {
            alert("error unkonw " + error)
        }
    }

   

    useEffect(()=> {
        userPost()
    },[])

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: <Link to={`/p/${username}/feed`}><label>Feed</label></Link>,
          children: <>{
            <>
         {
        data.map((items:any ,key)=> <React.Fragment key={key}><Feed
        username={items.userInstance.username}
        date={items.created_at}
        userid={items?.userInstance?.userid}
        postid={items?.postid}
        describe={items.content}
        profile={items?.userInstance.userInfoInstance?.profile_url} 
        path={items.uploadFiles}/>
        </React.Fragment>
        )
    }
    </>
          }</>,
        },
        {
          key: '2',
          label: <Link to={`/p/${username}/photo`}>
            <label className="">Photo</label>
            </Link>,
          children:  <UserPhoto/>,
        },
        {
          key: '3',
          disabled:true,
          label: 'achivement',
          children: <UserFollower/>,
        },
      ];

    return <div className="">
        <Tabs defaultActiveKey="1" items={items}/>  
        {data.length ? "" :  "No more"}
    </div>
}