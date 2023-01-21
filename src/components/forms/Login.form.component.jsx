import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input className="form-input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        className="form-input"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot login-forgot-password" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <button type="primary" htmlType="submit" className="btn btn-outline-success login-sumit">
                        Log in
                    </button> <br />
                    <a className='login-forgot-password' href="/signup">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;
