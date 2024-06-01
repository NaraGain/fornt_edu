import React, { useContext } from "react"
import { DeleteOutlined, 
    EllipsisOutlined,
    LoadingOutlined,
    PushpinOutlined,WarningOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import { deleteFeed } from "../../../../api/feed";
import {Dropdown, Space, message} from "antd"
import { UserContext } from "../../../../auth/ProtectedRoute";
import { useMutation, useQueryClient } from "react-query";
import { LoaderPage } from "../../../../components/loader/loaderPage";



export const MoreButton:React.FC<{postid:string ,userid:string, filePath?:string[] |null }> = 
({postid ,userid, filePath}) => {
    const currentUser:any = useContext(UserContext)
    const [messageApi ,contextHolder] = message.useMessage()
    const queryClient = useQueryClient()
    const {mutate ,isError, isLoading} = useMutation(deleteFeed , {
        onSuccess : (data)=>{
            if(data.success){
                messageApi.open({
                    type : "loading",
                    content : "Deleting...",
                    duration: 0
                })
                setTimeout(()=> {
                    messageApi.destroy()
                    queryClient.invalidateQueries(['home'])

                },2500)
            
            }else{
                messageApi.error(data.message)
            }
        },
        onError: ()=>{
            messageApi.error('there was an error operation')
        }
    })


    const hanldeDeletePost = 
    async (pid?:string | null  , filePath?:string[] | [] |null) => {
        try {
            mutate({
                userid : currentUser?.userid,
                postid : pid,
                filePath : filePath
            })
        } catch (error:any) {
             messageApi.error(error)
        }
    }

    const items:MenuProps['items'] = [{
        label : <a className="inline-flex gap-2 font-nokora">
            <div className="
            rounded-md px-1 ">
                <PushpinOutlined/>
            </div>
          
            save this feed</a>,
        key : 0
    },
    {
        label: <>{<a className="inline-flex gap-2 font-nokora">
            <div className="
              rounded-md px-1">
            <WarningOutlined className=""/>
            </div>
            report feed</a>}</>,
             key : 1
    },
    {
        label: <> {userid == currentUser?.userid ?
             <a 
             onClick={()=> hanldeDeletePost(postid,filePath as any)} 
        className="inline-flex gap-2 font-nokora">
        <div className="
          rounded-md px-1">
        {isLoading ? <LoadingOutlined/> : <DeleteOutlined/> }
        </div>
        remove </a> : null}</>,
         key : 2,
    }
    
    ]



    return <React.Fragment>
    {contextHolder}
    {isError ? <React.Fragment>Error</React.Fragment> :null}
    {isLoading ? <LoaderPage/> : null}
    <Dropdown
            placement="bottomRight"
            arrow
            className="cursor-pointer "
             menu={{items}} trigger={['click']}>
                <Space className="dark:text-neutral-200  text-[18px]">
                <EllipsisOutlined/>
                </Space>
            </Dropdown>
    </React.Fragment>
}