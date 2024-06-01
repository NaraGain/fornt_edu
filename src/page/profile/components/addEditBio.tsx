import { Form, Input ,Button, message } from "antd"
import { updateUserBio } from "../../../api/user"
import React, { useContext, useEffect, useState } from "react"
import { useForm } from "antd/es/form/Form"
import { EditInfoProvider } from "../editProfile"
import useFileResizer from "../../../hook/useImageResize"
import axios from "axios"

export const AddEditBio:React.FC = () => {
    const {TextArea} = Input
    const [form] = useForm()
    const data:any = useContext(EditInfoProvider)
    const [loading ,setLoading] = useState<boolean>(false)
    

    const update_Description = async (value:any) => {
        try {
            setLoading(true)
            const bio = form.getFieldValue("bio")
            const withLineBreaks = await bio?.replace(/\n/g, '<br>')
            const withParagrhs = `<p>${withLineBreaks}</p>`
            const response:any = await updateUserBio({
                infoId : data?.userInfoInstance?.infoid,
                bio : withParagrhs,
            })
           
            if(response.success){
                alert(1)
            }else{
                alert(0)
            }

            setLoading(false)

        } catch (error) {
            alert(error)
        }
    }
    //not covert to string yet
    useEffect(()=>{
        if(data){
        form.setFieldsValue({
            bio : data?.userInfoInstance?.bio?.replace(/(<([^>]+)>)/gi, '')
        })
    }

    },[data])

    return <>
    {}
     <Form 
        onFinish={update_Description}
        form={form}
        layout="vertical">
        <Form.Item 
        required
        extra=" summary of a person's professional
         background, competency, and expertise in their specific fields"
        name="bio"
        label="Bio">
            <TextArea
            showCount
            className="rounded-lg"
            maxLength={150}
            placeholder="wirte someting..."
            rows={6}
            ></TextArea>
        </Form.Item>
        <div className=" flex justify-end">
        <Form.Item>
            <Button
            loading={loading}
            htmlType="submit"
            className="bg-neutral-100 
            rounded-full
             border-none">
                save</Button>
        </Form.Item>
        </div>
        
    </Form>
    </>
}