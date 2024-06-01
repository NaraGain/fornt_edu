import React from "react";
import { LockOutlined, UserOutlined,MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import { registerUser } from "../../api/user";

const Register:React.FC  = ()=>{


  const register = async (value:any) => {
    try {
        // const respone = await registerUser(value)
        alert(1)
        console.log(value)
    } catch (error) {
      
    }
}


        return  <div className='flex bg-neutral-50  flex-col h-screen 
        justify-center items-center'>
          <h1>Require for create new account</h1>
        <Form
          onFinish={register}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
         
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="example@mail.com" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Please input your confirm_Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
     
          <Form.Item>
            <div className="flex gap-2">
                <Link to={'/login'}>
                <Button className='bg-green-500 w-full text-white'>Go back</Button>
                </Link>
                
                  <Button htmlType="submit" className='bg-[#1997BE] w-full
                 text-white'>submit form!</Button>
            </div>
            
          </Form.Item>
         
        </Form>
        </div>
}

export default Register;