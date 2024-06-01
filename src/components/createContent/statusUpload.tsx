import React, { useContext, useState } from "react"
import { createFeed } from "../../api/feed"
import { message, Input,Form, Button } from "antd"
import { CloseCircleOutlined, CloudUploadOutlined } from "@ant-design/icons"
import { UserContext } from "../../auth/ProtectedRoute"
import { useMutation, useQueryClient } from "react-query"
import useFormatContent  from "../../hook/userFormatContent"
import { OpenModalContext } from "./createContent"


interface FormState {
    username : string,
    content: string;
    
  }
  

export const StatusUpload:React.FC = () =>{

    const [messageApi , contextHolder] = message.useMessage()
    const currentUser:any = useContext(UserContext)
    const {TextArea} = Input
    const {dispatch} = useContext(OpenModalContext)
    const queryClient = useQueryClient()

    const {mutate , isLoading} = useMutation(createFeed ,{
        onSuccess : (data) => {
            dispatch({type : "Loading" , payload : true})
            dispatch({type : "SHOW_MODAL&&HIDEMODAL", payload:false})
            messageApi.success(data.message)
            setTimeout(()=>{
                queryClient.invalidateQueries(['home'])
                dispatch({type : "Loading" , payload : false})
            } ,1000)
           
        },
        onError: () => {
            messageApi.error("there was an error")
        },
    })

    const handleUpload = async (value:any)=> {
        try {
            //conver string to html elements 
            const withLineBreaks  =  value.content.replace(/\n/g, '<br>')
            const withLineParagrahs = `<p>${withLineBreaks}</p>`
            // const formartConent = useFormatContent(value.content)
            // setFormattedContent(formartConent)
            mutate({
                username : currentUser?.username,
                content : withLineParagrahs
            })
        
        } catch (error:any) {
            messageApi.error(error)
        }    
       }

       const handleCancel = () => {
        dispatch({type : "SHOW_MODAL&&HIDEMODAL", payload:false})
    }
       
    
    return <>
        {contextHolder}
        <Form onFinish={handleUpload}>
            <Form.Item name="content">
            <TextArea
            typeof="text"
            name="content"
            className="bg-neutral-50
         dark:bg-slate-600 dark:text-neutral-200
         text-neutral-500"
        placeholder="write something here..." rows={10}/>
        </Form.Item>
      <div className="flex gap-2 mt-4 justify-end">
        <label>
                <Button
                onClick={handleCancel}
                 className="text-sm inline-flex 
                 items-center gap-2
                 border-none
                 active:bg-neutral-300 
                 rounded-lg px-2 py-1
                  dark:bg-zinc-700
                  dark:text-neutral-100
                  bg-neutral-100">
                    <CloseCircleOutlined/>
                    <p>cancel</p></Button>
                    </label>
                <Button 
                loading={isLoading}
                htmlType="submit" 
                className="text-sm inline-flex 
                border-none
                active:bg-neutral-300
                 items-center gap-2 rounded-lg
                 py-1 px-2 bg-[#7469B6]
                 dark:bg-zinc-700 dark:text-neutral-100">
                    <CloudUploadOutlined  className="text-white"/>
                    <p className="text-white">upload</p>
                   </Button>
                </div>
                </Form>
    </>
}