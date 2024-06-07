import React, {  useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { login } from '../../api/user';


interface user {
  identifier : string,
  password:string
}

const Login: React.FC = () => {
const [messageApi , contextHolder] = message.useMessage()
const [isLoading ,setLoading] = useState<boolean>(false)


  const onFinish = async (values: user) => {
    try {
      setLoading(true)
      const response = await login(values)
      messageApi.open({
        key : 'login',
        type : "loading",
        content : "loading...",
        duration : 0
      })
      if(response.success){
          localStorage.setItem('TOKEN', response?.token)
          localStorage.setItem('userId' , response?.userId)
          localStorage.setItem('username', response?.username)
           window.location.href = "/home"
           messageApi.destroy('login')
         
      }else{
        messageApi.warning(response.message)
        messageApi.destroy('login')
      }
      setLoading(false)
    } catch (error:any) {
      messageApi.error(error)
      messageApi.destroy('login')
    }
  };

 
  return (
   
    <div className='flex w-full bg-neutral-50  flex-col  h-screen 
    justify-center items-center '>
      {contextHolder}
      <img className='h-10 w-10 rounded-full  filter
       grayscale contrast-200 brightness-0
          dark:brightness-75 ' src='./logoNav.png'/>
      <h1 className='pb-2 text-neutral-600 text-[18px] 
      font-thin tracking-wide'>Welcome to Krakvei</h1>
      <div className='bg-white rounded-md border dark:border md:mt-0 
      sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='py-6 px-3  sm:px-6 sm:py-8 '>
    <Form
      layout='vertical'
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="identifier"
        label="Username or Email"
        rules={[{
          whitespace : false, 
          required: true, 
          message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="py-1.5 rounded-md" />}
         placeholder="Username or E-mail" />
      </Form.Item>
      <Form.Item
      label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="py-1.5 rounded-md" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
        type='primary'
        className="bg-[#7469B6] w-full text-white"
         htmlType="submit">
          {
            isLoading ? "Signing in user..." : "Sign in"
          }
        </Button>
      </Form.Item>
    </Form>
    <div  className='w-full text-center'>
      <Link  className='text-[#7469B6] 
      text-center tracking-wide text-[14px]' to={`/register`}>
        Create account
      </Link>
   </div>
    </div>
    </div>
    </div>
  );
};

export default Login;