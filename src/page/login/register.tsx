import React from "react";
import { LockOutlined, UserOutlined,MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";

const Register:React.FC  = ()=>{
        return  <div className='flex dark:bg-white flex-col h-screen 
        justify-center items-center'>
        <Form
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
            name="confirm_password"
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
            text-white'>Register now!</Button>
            </div>
            
          </Form.Item>
         
        </Form>
        </div>
}

export default Register;