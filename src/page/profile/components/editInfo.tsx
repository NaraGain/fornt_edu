import { useContext, useEffect, useState } from "react"
import { Form ,Input, Button } from "antd"
import { upldateUserInfo } from "../../../api/user"
import { useForm } from "antd/es/form/Form"
import { EditInfoProvider } from "../editProfile"



export const EditInfo = () =>{
    const [loading ,setLoading] = useState<boolean>(false)
    const [form] = useForm()
    const data:any = useContext(EditInfoProvider)

    const update_userInfo = async (value: object) => {
        try {
            console.log(value)
            setLoading(true)
            const response = await upldateUserInfo(value)
    
            if(!response.success){
                    setLoading(false)
            }else{
                alert(response.message)
                form.setFieldsValue(response.result[0])
                setLoading(false)
            }

            setLoading(false)
        } catch (error:any) {
            alert(error)
        }
    }

    useEffect(()=>{
        if(data){
            form.setFieldsValue({
                firstname : data.firstname,
                lastname : data?.lastname,
                username : data?.username,
                email : data?.email,
                userid : data?.userid,
            })
        }

    },[data])


    return <>
    <Form
    onFinish={update_userInfo}
    form={form}
 
    layout="vertical">
        <div className="">
        <Form.Item
        name="firstname"
        rules={[{
            required : true,
            message : "first is not null"
        }]}
        label="Firstname">
            <Input 
            className="py-1.5 rounded-lg"
            placeholder="firtname"/>
        </Form.Item>
        <Form.Item 
        name="lastname"
        label="Lastname">
            <Input 
             className="py-1.5 rounded-lg"
            placeholder="lastname"/>
        </Form.Item>
        <Form.Item
        extra="Note : username are use for login user"
        name="username"
        label="Username">
        <Input 
         className="py-1.5 rounded-lg"
        placeholder="@username"/>
        </Form.Item>
        <Form.Item
        name="email"
        extra="unauthorize change"
        label="Email">
            <Input 
            disabled
            className="py-1.5 rounded-lg"
            placeholder="example@me.com"/>
        </Form.Item>
        </div>
        <div className="flex justify-end gap-3">
        <Form.Item
        name="userid"
        >
            <Button 
            loading={loading}
            htmlType="submit" 
            className="bg-neutral-100
             border-none rounded-full ">Save</Button>
        </Form.Item>
        </div>
        </Form>
    
    </>
}