import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const navigator = useNavigate()

  return (
    <div className='flex flex-col mx-auto h-screen 
    justify-center dark:bg-gray-700 items-center container'>
    <Form
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="dark:bg-slate-500" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="dark:bg-slate-500" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>remember me</Checkbox>
        </Form.Item>
        <a className="text-sm lowercase" href="">
          Forgot password
        </a>
      </Form.Item>
 
      <Form.Item>
        <div className='grid grid-cols-2 gap-3'>
        <Button
        onClick={()=>navigator('/main')}
        className="bg-blue-500 text-white" htmlType="submit">
          log in
        </Button>
        <Link to={'/register'}>
        <Button className='bg-green-500 text-white' href="">register now!</Button>
        </Link>
        </div>
      </Form.Item>
     
    </Form>
    </div>
  );
};

export default Login;